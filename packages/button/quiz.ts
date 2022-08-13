import { Event } from '@tlgr/component';
import { Context, Telegraf } from 'telegraf';
import { KeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import Keyboard from './keyboard';

type User = Event<'answer_user', [poll: Context<Update>['poll'], instance: Quiz]>;
type Anonymous = Event<'answer_anonymous', [answer: Context<Update>['pollAnswer'], instance: Quiz]>;


export default class Quiz extends Keyboard<[User, Anonymous]> {
  constructor(readonly bot: Telegraf, readonly text: string = 'create quiz') {
    super(bot, text, {
      prefix: '@tlgr/button/keyboard/quiz'
    });

    bot.on('poll', (ctx, next) => {
      this.emit(new Event('answer_anonymous', ctx.poll, this))
      next();
    });

    bot.on('poll_answer', (ctx, next) => {
      this.emit(new Event('answer_user', ctx.pollAnswer, this));
      next();
    });
  }
  render(): KeyboardButton.RequestPollButton {
    return {
      request_poll: { type: 'quiz' },
      text: this.text,
    }
  }
}