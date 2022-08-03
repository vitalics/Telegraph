export type AlertOptions = {
  text: string;
  /**
   * show text information
   * @default
   * true
   */
  show?: boolean;
  /**
   * Callback alert mode for next control
   * @default
   * 'text'
   * @type {('modal' | 'text')}
   */
  mode?: 'modal' | 'text'
};

export type Options = {
  /**
   * Custom prefix
   * @default
   * '@tlgr/button'
   *
   * @type {string}
   */
  prefix?: string;
  /**
   * Disable UUID generation. Helpful for generated names like date-picker
   * @default
   * false
   * @type {boolean}
   */
  disableUUID?: boolean;
  /**
   * Payload divider, if payload provided in `render` function
   * @default
   * '-'
   * @example
   * const button = new Button(bot, 'my custom button', {payloadDivider: '__'});
   * 
   * bot.command('temp', (ctx) => {
   * ctx.reply('reply message', {
   * inlineKeyboard: [button.render('someTempData')]
   * })})
   * 
   * bot.action('@tlgr/button', ctx => {
   *  console.log(ctx.matched) // [@tlgr/button, input: '@tlgr/button/<uuid>__someTempData']
   * })
   *
   * @type {string}
   */
  payloadDivider?: string;
  alert?: AlertOptions;
};