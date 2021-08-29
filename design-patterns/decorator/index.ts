import { MilkCoffee, WhipCoffee } from './coffeeTypes';
import { Coffee, SimpleCoffee } from './simpleCoffee';

const simple: Coffee = new SimpleCoffee();

const milk = new MilkCoffee(simple);
console.log(milk.getCost());

const whip = new WhipCoffee(milk);
console.log(whip.getCost());
console.log(whip.getDescription());
