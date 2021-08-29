export interface Coffee {
  getCost(): number;
  getDescription(): string;
}

export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return 'Simple coffee';
  }
}
