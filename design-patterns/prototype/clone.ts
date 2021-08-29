export class Concrete {
  #name: string;
  constructor(nameField: string) {
    this.#name = nameField;
  }

  clone(newName?: string) {
    return new Concrete(newName ?? this.#name);
  }

  public setName(value: string) {
    this.#name = value;
  }

  get name() {
    return this.#name;
  }
}
