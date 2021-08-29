export interface Lion {
  roar(): void;
}

export class AfricanLion implements Lion {
  public roar() {
    console.log('African Lion roars');
  }
}

export class AsianLion implements Lion {
  public roar() {
    console.log('Asian Lion roars');
  }
}

class WildDog {
  public bark() {
    console.log('Barking Dog');
  }
}

export class WildDogAdapter implements Lion {
  #dog: WildDog;
  constructor() {
    this.#dog = new WildDog();
  }

  public roar() {
    this.#dog.bark();
  }
}
