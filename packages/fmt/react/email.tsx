/** @jsx h */
import { Fragment, h } from 'preact';

type Props = {
  /**
   * Email prefix
   * @example
   * 'first.last'
   *
   * @type {string}
   */
  name: string;
  /**
   * Address name
   * @example
   * 'gmail.com'
   *
   * @type string
   */
  domen: `${string}.${string}`
} | {
  email: `${string}@${string}.${string}`
};

/** 
 * Generic Email component.
 * 
 * This component should include full `email` address 
 * or provide separate parts of email like `domen` and `name`
 */
export default (props: Props) => {
  let fullEmail: `${string}@${string}.${string}`;
  if (props && 'name' in props && 'domen' in props) {
    fullEmail = `${props.name}@${props.domen}`;
  } else if (props && 'email' in props) {
    fullEmail = props.email;
  } else {
    throw new TypeError('Unable to build email address');
  }
  return <Fragment>
    {fullEmail}
  </Fragment>
}
