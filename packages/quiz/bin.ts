import { Telegraf } from 'telegraf';
import Quiz from './quiz';

const TOKEN = '';
const bot = new Telegraf(TOKEN);


const quiz = new Quiz(bot, {
  name: 'QWE Quiz',
  options: ['answer 1', 'answer 2'],
  correct_option_id: 0,
  open_period: 600,
  is_anonymous: false,
  explanation: 'first is correct',
});

bot.start((ctx) => {
  quiz.send(ctx);
});

bot.launch();
