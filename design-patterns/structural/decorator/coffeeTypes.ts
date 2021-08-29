import { Coffee } from './simpleCoffee';

export class MilkCoffee implements Coffee {
  #coffee: Coffee;

  constructor(coffee: Coffee) {
    this.#coffee = coffee;
  }

  public getCost(): number {
    return this.#coffee.getCost() * 2;
  }

  public getDescription(): string {
    return this.#coffee.getDescription() + ', milk';
  }
}

export class WhipCoffee implements Coffee {
  #coffee: Coffee;

  constructor(coffee: Coffee) {
    this.#coffee = coffee;
  }

  public getCost(): number {
    return this.#coffee.getCost() * 5;
  }

  public getDescription(): string {
    return this.#coffee.getDescription() + ', whip';
  }
}
