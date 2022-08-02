import dayjs, { Dayjs } from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import updateLocale from 'dayjs/plugin/updateLocale';
import localeData from 'dayjs/plugin/localeData';
import isoWeek from 'dayjs/plugin/isoWeek';
import duration from 'dayjs/plugin/duration';

import { MONTHS_NUMERIC, WEEKDAYS_NUMERIC } from './constants';

dayjs.extend(calendar);
dayjs.extend(updateLocale);
dayjs.extend(localeData);
dayjs.extend(isoWeek);
dayjs.extend(duration);

type Options = {
  /**
   * If `true` - renders previous dates(before today) as `null`
   *
   * @type {boolean}
   */
  disableBeforeToday?: boolean;
  /**
   * Date to view
   * @default
   * dayjs()
   *
   * @type {Dayjs}
   */
  date?: Dayjs;
  locale?: string;
}

type WeekdayOptions = {
  /**
   * Week day format to display:
   * @example
   * format: 'short' // Thu. Equals Thursday
   * format: 'narrow'// T Equals Thursday
   * format: 'long'// Thursday
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * @default
   * 'short'
   */
  format?: "short" | "long" | "narrow";
  /**
   * Week day format to display:
   * @example
   * format: 'short' // Aug. Equals August
   * format: 'long'// August
   * @default
   * '2-digit'
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   */
  dayFormat?: "numeric" | "2-digit",
  /**
   * Wrap each 7 days(Week) to chunks
   * @default
   * false
   * @example
   * [
   * [1,2,3,4,5,6,7],
   * [8,9,10,11,12,13],
   * ...etc
   * ]
   *
   * @type {boolean}
   */
  chunks?: boolean;
};

type MonthOptions = {
  /**
   * Week day format to display:
   * @example
   * format: 'short' // Aug. Equals August
   * format: 'long'// August
   * @default
   * 'short'
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   */
  format?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  /**
   * Split months to sub-arrays(grids).
   * 
   * @default
   * 1
   * @example
   * helper.Months({chunks: 1}).render() // [ Jan, Feb, Mar, Apr, etc]
   * helper.Months({chunks: 2}).render() // [ [Jan, Feb], [Mar, Apr], etc]
   * helper.Months({chunks: 3}).render() // [ [Jan, Feb, Mar], [Apr, May, Jun], etc]
   * helper.Months({chunks: 4}).render() // [ [Jan, Feb, Mar, Apr], [May, Jun, July], etc]
   * helper.Months({chunks: 12}).render() // [ [Jan], [Feb], [Mar], [Apr], etc]
   * helper.Months({chunks: 'season'}).render() // [ 
   * // [Dec, Jan, Feb], // winter = 0
   * // [Mar, Apr, May], // spring = 1
   * // [June, July, August] // summer = 2
   * // [Sept, Oct, Nov] // autumn = 3
   * // ]
   * 
   */
  chunks?: 1 | 2 | 3 | 4 | 6 | 12 | 'season'
}

export function Helper(options?: Options) {
  const viewedDate = (options?.date ?? dayjs()).set('hour', 1).set('second', 1);
  const today = dayjs().set('hour', 1).set('second', 1);
  function Month(monthOptions?: MonthOptions) {
    const isCurrentYear = viewedDate.year() === today.year();
    const startedYear = viewedDate.startOf('year');
    const intl = new Intl.DateTimeFormat(options?.locale ?? 'en-US', { month: monthOptions?.format ?? 'short' })
    const chunkSize = monthOptions?.chunks ?? 1;
    const isDisabled = (index: number): boolean => {
      return (
        !!options?.disableBeforeToday &&
        (viewedDate.year() < today.year() ||
          (isCurrentYear && index < today.month()))
      )
    }
    const render = () => {
      const monthsArray = MONTHS_NUMERIC.map((month, index) => {
        if (isDisabled(index)) return null;
        return intl.format(startedYear.set('month', month).set('date', 1).toDate())
      });
      if (chunkSize === 1) {
        return monthsArray;
      }
      if (chunkSize === 'season') {
        const december = monthsArray.at(-1);
        const monthsWithoutDec = monthsArray.slice(0, -1);
        const seasons = [december, ...monthsWithoutDec]
        return chunks(seasons, 3);
      }
      else {
        return chunks(monthsArray, chunkSize);
      }
    }
    return { render }
  }
  function Weekdays(weekdayOptions?: WeekdayOptions) {
    const startedMonth = viewedDate.startOf('month');
    const endedMonth = viewedDate.endOf('month');
    const startingDay = (startedMonth.day() + 6) % 7;
    const endingDay = (7 - (endedMonth.day()));
    const today = dayjs().startOf('day');
    const weekdayIntl = Intl.DateTimeFormat(options?.locale ?? 'en-US', { weekday: weekdayOptions?.format ?? 'short' });
    const dayFormat = weekdayOptions?.dayFormat ?? 'numeric';
    const generateDays = (): string[] => {
      return Array.from(
        new Array(viewedDate.daysInMonth()),
        (_, index) => {
          const result = index + 1;
          if (dayFormat === '2-digit') {
            return result.toFixed(2)
          }
          if (dayFormat === 'numeric') {
            return String(result);
          } else {
            throw new Error(`invalid day format "${dayFormat}". Available formats: "numeric" and "2-digit"`)
          }
        }
      )
    }
    const isDisabled = (day: number): boolean => {
      return (
        (!!options?.disableBeforeToday &&
          (viewedDate.year() < today.year() ||
            (viewedDate.year() === today.year() &&
              (viewedDate.month() < today.month() ||
                (viewedDate.month() === today.month() &&
                  day < today.date())))))
      )
    }

    const render = (): (string | null[][]) | (string | null[][][]) => {
      const dayOfWeek = startedMonth.startOf('week');
      const weekdays = WEEKDAYS_NUMERIC.map(v => {
        return weekdayIntl.format(dayOfWeek.set('day', v + 1).toDate())
      });
      const emptyStart = Array(startingDay).fill(null);
      let emptyEnd = Array(endingDay).fill(null)
      const days = generateDays().map(day => {
        if (isDisabled(+day)) return null;
        return day;
      });
      const totalDays = [...emptyStart, ...days, ...emptyEnd];
      return [
        weekdays,
        weekdayOptions?.chunks ? chunks(totalDays, 7) : totalDays,
      ];
    };
    return { render }
  }

  return {
    Weekdays,
    Month,
  };
}

/**
 * Chunkify array.
 * @see https://stackoverflow.com/a/37826698/6515842
 * @param {unknown[]} array incoming array
 * @param {number} [size=0] chunk size
 */
export function chunks<T>(array: T[], size = 7): T[][] {
  const result = array.reduce((resultArray: T[][], item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []// start a new chunk
    }
    resultArray[chunkIndex].push(item)

    return resultArray
  }, []);
  return result;
}

// console.log(Helper({ disableBeforeToday: true, date: dayjs(Date.UTC(2022, 7, 1, 1, 1)) }).Weekdays({ chunks: false }).render());
