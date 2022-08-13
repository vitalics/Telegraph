import { Event } from '@tlgr/component';
import { Component } from '@tlgr/component';
import { Context, Telegraf } from 'telegraf';
import { Message, Update } from 'telegraf/typings/core/types/typegram';
import { ExtraPoll } from 'telegraf/typings/telegram-types';

type MappedExtraOptions = Omit<ExtraPoll, 'explanation' | 'correct_option_id'>;

export type Options = {
  /**
   * Quiz Name
   *
   * @type {string}
   */
  name: string;
  /**
   * Quiz variations.
   *
   * @type {readonly}
   */
  options: readonly string[];
  /** 
   * Correct answer id.
   * `0` is first.
   */
  correct_option_id: number;
  explanation?: string;
} & MappedExtraOptions;

type StopPollType = Awaited<ReturnType<Telegraf['telegram']['stopPoll']>>;

type Err = Event<'error', [err: TypeError]>;
type Sent = Event<'sent', [quiz: Message.PollMessage, instance: Quiz]>;
type Stop = Event<'stop', [poll: StopPollType, instance: Quiz]>;

type User = Event<'answer_user', [poll: Context<Update.PollAnswerUpdate>['pollAnswer'], instance: Quiz]>;
type Anonymous = Event<'answer_anonymous', [poll: Context<Update.PollUpdate>['poll'] & { total_voter_count: number }, instance: Quiz]>;

export default class Quiz extends Component<[Err, Sent, Stop, User, Anonymous]> {
  #messageId?: number;
  #chatId?: number;
  constructor(bot: Telegraf, readonly options: Options) {
    super(bot);

    bot.on('poll', ctx => {
      this.emit(new Event('answer_anonymous', ctx.poll, this));
    });
    bot.on('poll_answer', ctx => {
      this.emit(new Event('answer_user', ctx.pollAnswer, this));
    })
  }

  async send(context: Context<Update>) {
    const { name, options, ...extra } = this.options;

    if (!context.chat || !context.chat.id || typeof context.chat.id !== 'number') {
      const error = new TypeError(`Unable to send quiz to unknown chat. Expected type "number". Got "${context.chat?.id}"`)
      this.emit(new Event('error', error))
    }

    this.#chatId = context.chat?.id!;
    const quiz = await this.bot.telegram.sendQuiz(context.chat?.id!, name, options, { ...extra });
    this.#messageId = quiz.message_id;
    this.emit(new Event('sent', quiz, this));
  }

  async stop() {
    if (typeof this.#chatId !== 'number' || typeof this.#messageId !== 'number') {
      const error = new Error('Unable to stop the quiz. Call "send" before');
      this.emit(new Event('error', error));
      throw error;
    }
    const poll = await this.bot.telegram.stopPoll(this.#chatId, this.#messageId);
    this.emit(new Event('stop', poll, this));
    this.cleanup();
  }
}