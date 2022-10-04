import { Fragment, h } from 'preact'
import type { Props } from '../html/bold'

/**
 * @deprecated use `react` module instead
 * 
 */
export default ({ children }: Props) => {
  return <Fragment>**{children}**</Fragment>
}
