import { Event } from '@tlgr/component';
import { Context, Telegraf } from 'telegraf';
import { KeyboardButton, Update } from 'telegraf/typings/core/types/typegram';
import Keyboard from './keyboard';

type Options = {

};
type User = Event<'answer_user', [poll: Context<Update>['poll'], instance: Poll]>;
type Anonymous = Event<'answer_anonymous', [answer: Context<Update>['pollAnswer'], instance: Poll]>;

export default class Poll extends Keyboard<[User, Anonymous]> {
  constructor(readonly bot: Telegraf, readonly text: string = 'create poll', readonly options?: Options) {
    super(bot, text, {
      prefix: '@tlgr/button/keyboard/poll'
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
      request_poll: { type: 'regular' },
      text: this.text,
    }
  }
}