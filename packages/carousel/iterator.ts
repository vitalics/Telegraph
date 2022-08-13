type Options = {
  loop?: boolean;
  startIndex?: number;
};
export default class ArrayIterator<T> {
  readonly length = this.array.length;
  #index = this.options?.startIndex ?? 0;
  #current: T = this.array.at(this.#index)!;
  #loop = this.options?.loop ?? false;
  get current() {
    return this.#current;
  }
  get index() {
    return this.#index;
  }
  constructor(readonly array: T[], readonly options?: Options) { }
  *nextGenerator() {
    let isEnd = false;
    while (this.#loop || !isEnd) {
      this.#index++;
      this.#current = this.array.at(this.#index)!;
      if (!this.#current) {
        // if next item does not exist and "loop=true" - start over again
        if (this.#loop) {
          this.#index = 0;
          this.#current = this.array.at(this.#index)!;
        } else {
          isEnd = true;
          return;
        }
      }
      yield this.#current;
    }
  }
  *prevGenerator() {
    let isEnd = false;
    while (this.#loop || !isEnd) {
      this.#index--;
      this.#current = this.array.at(this.#index)!;
      if (!this.#current) {
        // if next item does not exist and "loop=true" - start over again
        if (this.#loop) {
          this.#index = this.array.length - 1;
          this.#current = this.array.at(this.#index)!;
        } else {
          isEnd = true;
          return;
        }
      }
      yield this.#current;
    }
  }
}