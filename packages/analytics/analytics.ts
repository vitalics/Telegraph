import { Component, Event as ComponentEvent } from '@tlgr/component';
import { Context, Telegraf } from 'telegraf';
import type { Update } from 'telegraf/typings/core/types/typegram'
import { MessageSubType, UpdateType } from 'telegraf/typings/telegram-types';

import Event from './event';
import * as plugins from './plugins';

const botOnActions: (UpdateType | MessageSubType)[] =
  ['animation', 'audio', 'callback_query',
    'channel_chat_created', 'channel_post', 'chat_join_request',
    'chat_member', 'chosen_inline_result', 'connected_website',
    'contact', 'delete_chat_photo', 'dice', 'document',
    'edited_channel_post', 'edited_message', 'forward_date',
    'game', 'group_chat_created', 'inline_query', 'invoice',
    'left_chat_member', 'location', 'message',
    'message_auto_delete_timer_changed', 'migrate_from_chat_id',
    'my_chat_member', 'new_chat_members', 'new_chat_photo',
    'new_chat_title', 'passport_data', 'photo', 'pinned_message',
    'poll', 'poll_answer', 'pre_checkout_query',
    'proximity_alert_triggered', 'shipping_query', 'sticker',
    'successful_payment', 'supergroup_chat_created', 'text',
    'venue', 'video', 'video_chat_ended', 'video_chat_participants_invited',
    'video_chat_scheduled', 'video_chat_started', 'video_note',
    'voice', 'web_app_data'];

const botCommands = ['start', 'settings'] as const;

type Events = [ComponentEvent<`analytics:plugin:init`, [plugin: plugins.Plugin]>
  , ComponentEvent<`analytics:plugin:end`, [plugin: plugins.Plugin]>
  , ComponentEvent<`analytics:bot:action`, [command: string, ctx: Context<Update.CallbackQueryUpdate>]>
  , ComponentEvent<'analytics:bot:hears', [ctx: Context<Update>]>
  , ComponentEvent<'analytics:bot:error', [error: unknown, ctx: Context<Update>]>
  , ComponentEvent<`analytics:bot:${typeof botOnActions[number]}`>
];

/**
 * Analytics event collector
 * 
 * Can accepts plugins.
 *
 * @export
 * @class Analytics
 * @extends {Component}
 * @extends {`analytics:bot:${string}`}
 */
export default class Analytics extends Component<Events> {
  get plugins() {
    return [...this.#plugins];
  }
  #plugins = new Set<plugins.Plugin>([]);
  constructor(readonly bot: Telegraf, ...plugins: plugins.Plugin[]) {
    super(bot);

    // plugin initialization
    plugins.forEach(p => {
      if (this.#plugins.has(p)) {
        throw new ReferenceError(`Unable to add existing plugin by name ${p.name}`);
      }
      this.#plugins.add(p);
      this.emit(new Event(`plugin:init`, p));
    });

    // on any event - trigger plugins listener.
    this.emitter.onAny(async (event, param) => {
      await Promise.all(this.plugins.map(async p => {
        if (Array.isArray(event)) {
          await Promise.all(event.map(e => {
            return p.listener(e, param);
          }));
        } else {
          await p.listener(event, param);
        }
      }))
    });


    // bot subscriptions
    this.subscribe();
  }

  private subscribe() {
    botOnActions.forEach(action => {
      this.bot.on(action, (ctx, next) => {
        this.emit(new Event(`bot:${action}`, ctx));
        next();
      });
    });

    botCommands.forEach(command => {
      this.bot[command]((ctx, next) => {
        this.emit(new Event(`bot:action`, command, ctx));
        next();
      });
    });

    const anyStringRegex = new RegExp('(.*)', 'gm');
    // actions, starts from / symbol
    this.bot.action(anyStringRegex, (ctx, next) => {
      const commandName = ctx.match[0];
      this.emit(new Event(`bot:action`, commandName, ctx))
      next();
    });
    // Text message
    this.bot.hears(anyStringRegex, (ctx, next) => {
      this.emit(new Event(`bot:hears`, ctx))
      next();
    });
    // Error handles
    this.bot.catch((err, ctx) => {
      this.emit(new Event(`bot:error`, err, ctx));
    });

    process.on('SIGINT', () => {
      this.emit(new Event('process:SIGINT'))
      this.disable(true);
    });
  }

  #enabled = false;
  #disabled = false;
  /**
   * Get analytics status
   *
   * @readonly
   * @memberof Analytics
   */
  get enabled() {
    return this.#enabled;
  }

  /**
   * Get analytics status
   *
   * @readonly
   * @memberof Analytics
   */
  get disabled() {
    return this.#disabled;
  }

  /**
   * Enable analytics.
   *
   * @param {boolean} [launchBot=false] If `true` immediate start bot
   */
  enable(launchBot = false) {
    if (this.#enabled) {
      throw new Error('Unable to enable analytics. Already enabled.')
    }
    this.#enabled = true;
    this.#disabled = false;
    this.emit(new Event('enable', launchBot));
    launchBot && this.bot.launch().then(() => {
      this.emit(new Event('bot:launch'));
    });
  }

  /**
   * Disable analytics
   *
   * @param {boolean} [stopBot=false] if `true` - stop the bot
   */
  disable(stopBot = false) {
    if (this.#disabled) {
      throw new Error('Unable to disable analytics. Already disabled.')
    }
    this.#disabled = true;
    this.#enabled = false;
    this.#plugins.forEach(p => {
      if (p.end) {
        this.emit(new Event(`plugin:end`, p));
        p.end();
      }
    });
    this.emit(new Event('disable', stopBot));
    // unsubscribe to all events
    this.cleanup();
    stopBot && this.bot.stop();
  }
  override emit(event: Event): boolean {
    if (this.#enabled || event.name.includes('plugin')) {
      return super.emit(event);
    }
    return false;
  }
}
