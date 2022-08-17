import { decorate } from './util';

export default function bold<S extends string>(str: S | TemplateStringsArray) {
  return decorate(str, 'bold');
}
