import { Fragment, h } from 'preact';

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

type Props = {
  cash: number | `${number}` | `${string}${number}`,
} & Options;

/**
 * Create cash tag with formatting.
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat for more
 */
export default function Cash(props: Props) {
  const formatter = new Intl.NumberFormat(props?.locale ?? 'en-US', {
    currency: props?.currency ?? 'USD',
    style: 'currency',
    signDisplay: props?.signDisplay,
    minimumSignificantDigits: props?.minimumSignificantDigits,
    maximumFractionDigits: props?.maximumFractionDigits,
    maximumSignificantDigits: props?.maximumSignificantDigits,
    minimumFractionDigits: props?.minimumFractionDigits,
    minimumIntegerDigits: props?.minimumFractionDigits
  });

  return <Fragment>{formatter.format(+props.cash)}</Fragment>
}