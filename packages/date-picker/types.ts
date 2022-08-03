import { Dayjs } from 'dayjs';
import { types } from '@tlgr/button';

export type Options = {
  /**
   * Reply mode.
   * 
   * `new` - write new message, after each action.
   * `edit` - edit existing message.
   * @default
   * 'edit'
   */
  mode?: 'edit' | 'new';
  /**
   * Started date
   * @default
   * dayjs()
   */
  date?: Dayjs | Date;
  /**
   * show past days as non empty elements
   * @default
   * false
   *
   * @type {boolean}
   */
  showPast?: boolean;
  /**
   * Locale
   * @default
   * en-US
   *
   * @type {string}
   */
  locale?: string;
  controls?: {
    prev?: Control;
    next?: Control;
    /**
     * Empty day control settings
     * Empty - day is renders as empty for previous days, if `showPast:false`
     * 
     * @type {Control}
     */
    empty?: Control;
    /**
     * Start or end of months. E.g. month starts from tuesday, out of range element is monday
     *
     * @type {Control}
     */
    outOfRange?: Control
  }
};

export type MonthOptions = Options & {
  /**
   * Split months to sub-arrays(grids).
   * 
   * @default
   * 3
   * @example
   * helper.Months({chunks: 1}).render() // [ Jan, Feb, Mar, Apr, etc]
   * helper.Months({chunks: 2}).render() // [ [Jan, Feb], [Mar, Apr], etc]
   * helper.Months({chunks: 3}).render() // [ [Jan, Feb, Mar], [Apr, May, Jun], etc]
   * helper.Months({chunks: 4}).render() // [ [Jan, Feb, Mar, Apr], [May, Jun, July], etc]
   * helper.Months({chunks: 12}).render() // [ [Jan], [Feb], [Mar], [Apr], etc]
   * helper.Months({chunks: 'season'}).render() // [ 
   * // [Dec, Jan, Feb], // winter
   * // [Mar, Apr, May], // spring
   * // [June, July, August] // summer
   * // [Sept, Oct, Nov] // autumn
   * // ]
   * 
   */
  chunks?: 1 | 2 | 3 | 4 | 6 | 12 | 'season';
}

type Control = {
  /**
   * symbol button render.
   * @default
   * '>' or '<' or ' '
   */
  symbol?: string;
  alert?: types.AlertOptions;
};
