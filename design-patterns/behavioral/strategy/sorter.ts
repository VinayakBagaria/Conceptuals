import { SortStrategy } from './sortStrategy';

export class Sorter {
  #strategy: SortStrategy;
  constructor(strategy: SortStrategy) {
    this.#strategy = strategy;
  }

  public sort<T>(dataset: Array<T>): Array<T> {
    return this.#strategy.sort(dataset);
  }
}
