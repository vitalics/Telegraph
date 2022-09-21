import { Fragment, h, JSX } from 'preact';
import toString from 'preact-render-to-string'
import { parsePhoneNumber, type PhoneNumberFormat } from 'awesome-phonenumber';

export type Props = {
  children: string | JSX.Element;
  format?: PhoneNumberFormat;
  /**
   * Region code for the phone number (only required if phoneNumber is on a national format). Example: 'SE' for Sweden, 'CH' for Switzerland, etc.
   *
   * @type {string}
   */
  regionCode?: string;
};

/**
 * Represents phone number.
 *
 * Formatter takes from awesome-phonenumber package.
 *
 * @export
 * @param phone
 * @param options phone formatter options
 * @see https://www.npmjs.com/package/awesome-phonenumber for more type formatters
 * @return {string} Phone number
 */
export default function (props: Props) {
  let phoneNumber: string;
  if (typeof props.children === 'object') {
    phoneNumber = toString(props.children);
  } else {
    phoneNumber = props.children.toString();
  }
  const parsed = parsePhoneNumber(phoneNumber, props?.regionCode)
  if (!parsed.isValid()) {
    throw new TypeError(`Phone "${props.children}" number is not valid`)
  }
  return <Fragment>{parsed.getNumber(props?.format)}</Fragment>;
}