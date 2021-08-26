import { Concrete } from './clone';

const c1: Concrete = new Concrete('type 1');

const c2: Concrete = c1.clone();
console.log('Before setting:', c2.name);
c2.setName('type 2');
console.log('After setting:', c2.name);
console.log('C1 name:', c1.name);
