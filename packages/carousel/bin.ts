import { Telegraf } from 'telegraf';

import Carousel from './carousel';

const TOKEN = '';
const bot = new Telegraf(TOKEN);

const cats: string[] = [
  // 'https://snapshot.canon-asia.com/vn/article/eng/3-ideas-for-cute-cat-photos',
  // 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  'text 1',
  'text 2',
  'Long text'
];

const carousel = new Carousel(bot, {
  items: cats,
  type: 'message',
  loop: true,
});

carousel.on('next', (ctx, instance) => {
  console.log(`render next: ${instance.item}`);
});

carousel.on('prev', (ctx, instance) => {
  console.log(`render prev: ${instance.item}`);
});


bot.start((ctx) => {
  carousel.send(ctx);
})

bot.launch();
