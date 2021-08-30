import { Sorter } from './sorter';
import { BubbleSort, QuickSort } from './sortStrategy';

const bubble = new Sorter(new BubbleSort());
console.log(bubble.sort([1, 3, 2]));

const quick = new Sorter(new QuickSort());
console.log(quick.sort([1, 3, 8, 5, 2, 7, 6, 4]));
