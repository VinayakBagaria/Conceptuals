import { President } from './president';

const p1 = President.getInstance();
const p2 = President.getInstance();

console.log(p1 === p2);
