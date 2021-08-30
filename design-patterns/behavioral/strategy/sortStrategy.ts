export interface SortStrategy {
  sort<T>(dataset: Array<T>): Array<T>;
}

export class BubbleSort implements SortStrategy {
  public sort<T>(dataset: Array<T>): Array<T> {
    console.log('Bubble Sort');
    return dataset;
  }
}

export class QuickSort implements SortStrategy {
  public sort<T>(dataset: Array<T>): Array<T> {
    console.log('Quick Sort');
    return dataset;
  }
}
