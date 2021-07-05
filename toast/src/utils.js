import { QUOTES_ARRAY } from './constants';

// https://github.com/jossmac/react-toast-notifications/blob/master/src/utils.js
export function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);
  return first + second;
}

function genRandomNumberInRange(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}

export function genQuotesInArray() {
  const index = genRandomNumberInRange(0, QUOTES_ARRAY.length - 1);
  return QUOTES_ARRAY[index].quote;
}
