class CoffeeFlavour {
  #name: string;
  static #cache: Record<string, CoffeeFlavour> = {};
  constructor(name: string) {
    this.#name = name;
  }

  static intern(name: string) {
    if (!(name in this.#cache)) {
      this.#cache[name] = new CoffeeFlavour(name);
    }
    return this.#cache[name].#name;
  }
}

export class CoffeeShop {
  #orders: Array<Function>;
  constructor() {
    this.#orders = [];
  }

  public takeOrder(flavourName: string, tableNumber: number) {
    const flavour = CoffeeFlavour.intern(flavourName);
    this.#orders.push(() => {
      console.log(`Serving ${flavour} to table ${tableNumber}`);
    });
  }

  public service() {
    this.#orders.forEach((eachOrder) => eachOrder());
  }
}
