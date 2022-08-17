import { decorate } from './util';

/**
 * Returns email.
 *
 * @example
 * email('first_last', 'gmail.com') // returns first_last@gmail.com
 * @export
 * @template Name
 * @template Host
 * @param {Name} name e.g. example
 * @param {Host} host host name, e.g gmail.com
 * @return {*} string with format `name@host`. E.g `example@gmail.com`
 */
export default function email<Name extends string, Host extends string>(name: Name, host: Host) {
  return decorate(`${name}@${host}`, 'email')
}
