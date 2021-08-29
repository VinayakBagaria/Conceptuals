import { Computer } from './computer';

export class ComputerFacade {
  #computer: Computer;

  constructor(computer: Computer) {
    this.#computer = computer;
  }

  public turnOn() {
    this.#computer.getElectricShock();
    this.#computer.makeSound();
    this.#computer.showLoadingScreen();
    this.#computer.bam();
  }

  public turnOff() {
    this.#computer.closeEverything();
    this.#computer.pullCurrent();
    this.#computer.sooth();
  }
}
