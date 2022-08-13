import { Component, Event } from '@tlgr/component';
import { Context, Telegraf } from 'telegraf';
import { Message, Update as TgUpdate } from 'telegraf/typings/core/types/typegram';
import { ExtraPoll } from 'telegraf/typings/telegram-types';

type MappedExtraOptions = Omit<ExtraPoll, 'explanation' | 'correct_option_id'>;

export type Options = {
  /**
   * Poll name
   *
   * @type {string}
   */
  name: string;
  /**
   * Poll variations.
   *
   * @type {readonly}
   */
  options: readonly string[],
} & MappedExtraOptions;

export type AnswerAnonymous = Context<TgUpdate.PollUpdate>['poll'] & { total_voter_count: number };
export type AnswerUser = Context<TgUpdate.PollAnswerUpdate>['pollAnswer']

type StopPollType = Awaited<ReturnType<Telegraf['telegram']['stopPoll']>>;
// Events
type Sent = Event<'sent', [ctx: Context<TgUpdate>, instance: Poll]>;
type Stop = Event<'stop', [poll: StopPollType, instance: Poll]>;
type AnonymousAnswer = Event<'answer_anonymous', [poll: AnswerAnonymous, instance: Poll]>;
type UserAnswer = Event<'answer_user', [poll: AnswerUser, instance: Poll]>;
type Err = Event<'error', [error: Error]>;

export default class Poll extends Component<[Sent, Err, AnonymousAnswer, UserAnswer, Stop]> {
  #closed = false;
  #opened = false;
  #messageId: number | undefined;
  #chatId: number | undefined;
  get closed() {
    return this.#closed;
  }
  get opened() {
    return this.#opened;
  }
  constructor(readonly bot: Telegraf, readonly options: Options) {
    super(bot);

    bot.on('poll', (ctx) => {
      // Anonymous poll sent and someone answered.
      this.#closed = ctx.poll.is_closed;
      this.#opened = !this.#closed;
      this.emit(new Event('answer_anonymous', ctx, ctx.poll, this));
    });
    bot.on('poll_answer', ctx => {
      // Non anonymous poll sent ans someone answered.
      console.log('Context is', ctx);
      this.#opened = !this.#closed;
      this.emit(new Event('answer_user', ctx, ctx.pollAnswer, this));
    });
  }
  async send(context: Context<TgUpdate>) {
    if (!context.chat || !context.chat.id || typeof context.chat.id !== 'number') {
      const error = new TypeError(`Unable to send poll to unknown chat. Expected type "number". Got "${context.chat?.id}"`)
      this.emit(new Event('error', error));
    }
    this.#chatId = context.chat?.id!;

    const { name, options, ...extra } = this.options;
    const poll = await this.bot.telegram.sendPoll(this.#chatId, name, options, { ...extra });
    this.#closed = poll.poll.is_closed;
    this.#opened = !this.#closed;
    this.#messageId = poll.message_id;
    this.emit(new Event('sent', context, this));
  }
  async stop() {
    if (this.#closed) {
      const error = new Error('Unable to stop. Poll is already closed');
      this.emit(new Event('error', error));
    }
    if (typeof this.#messageId !== 'number' || typeof this.#chatId !== 'number') {
      const error = new Error('Unable to stop. Call "send" before');
      this.emit(new Event('error', error));
      throw error;
    }
    const poll = await this.bot.telegram.stopPoll(this.#chatId, this.#messageId);
    this.emit(new Event('stop', poll, this));
    this.#closed = poll.is_closed;
    this.#opened = !this.#closed;
    this.cleanup();
  }
}