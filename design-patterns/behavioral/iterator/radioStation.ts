export class RadioStation {
  #frequency: number;

  constructor(frequency: number) {
    this.#frequency = frequency;
  }

  public getFrequency(): number {
    return this.#frequency;
  }
}
