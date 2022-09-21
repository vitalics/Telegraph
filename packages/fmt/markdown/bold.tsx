import { Fragment, h } from 'preact'
import type { Props } from '../html/bold'

export default ({ children }: Props) => {
  return <Fragment>**{children}**</Fragment>
}
