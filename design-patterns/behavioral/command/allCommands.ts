import { Bulb } from './receiver';

export interface Command {
  execute(): void;
  undo(): void;
}

export class TurnOn implements Command {
  #bulb: Bulb;
  constructor(bulb: Bulb) {
    this.#bulb = bulb;
  }

  public execute(): void {
    this.#bulb.turnOn();
  }

  public undo(): void {
    this.#bulb.turnOff();
  }
}

export class TurnOff implements Command {
  #bulb: Bulb;
  constructor(bulb: Bulb) {
    this.#bulb = bulb;
  }

  public execute(): void {
    this.#bulb.turnOff();
  }

  public undo(): void {
    this.#bulb.turnOn();
  }
}
