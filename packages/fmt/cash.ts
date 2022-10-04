import { decorate } from './util';


type Options = {
  /**
   * Locale
   * @default 
   * 'en-US'
   *
   * @type {string}
   */
  locale?: string;
  /**
   * Currency code, like `JPY`, `USD`, `EUR`
   * @default 
   * 'USD'
   * @type {string}
   */
  currency?: string;
  /**
   * @default
   * '$'
   *
   * @type {string}
   */
  currencyDisplay?: string;
  maximumSignificantDigits?: number;
  minimumSignificantDigits?: number;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  minimumIntegerDigits?: number;
  signDisplay?: "auto" | "never" | "always" | "exceptZero",
};
/**
 * Create cash tag with formatting.
 * 
 * @deprecated use `string` module instead
 * 
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat for more
 *
 * @export
 * @param cash price
 */
export default function cash(cash: number | `${number}` | `${string}${number}`, options?: Options) {
  const formatter = new Intl.NumberFormat(options?.locale ?? 'en-US', {
    currency: options?.currency ?? 'USD',
    style: 'currency',
    signDisplay: options?.signDisplay,
    minimumSignificantDigits: options?.minimumSignificantDigits,
    maximumFractionDigits: options?.maximumFractionDigits,
    maximumSignificantDigits: options?.maximumSignificantDigits,
    minimumFractionDigits: options?.minimumFractionDigits,
    minimumIntegerDigits: options?.minimumFractionDigits
  });

  return decorate(formatter.format(+cash), 'cash');
}