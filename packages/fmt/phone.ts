import { parsePhoneNumber, type PhoneNumberFormat } from 'awesome-phonenumber';

import { decorateTag } from './util';

type Options = {
  format?: PhoneNumberFormat;
  /**
   * Region code for the phone number (only required if phoneNumber is on a national format). Example: 'SE' for Sweden, 'CH' for Switzerland, etc.
   *
   * @type {string}
   */
  regionCode?: string;
};

/**
 * @deprecated use `string` module instead
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
export default function phone(phone: `${number}` | number | `+${number}`, options?: Options) {
  const parsed = parsePhoneNumber(phone.toString(), options?.regionCode)
  if (!parsed.isValid()) {
    throw new TypeError(`Phone "${phone}" number is not valid`)
  }
  return decorateTag(parsed.getNumber(options?.format), 'phone')
}
