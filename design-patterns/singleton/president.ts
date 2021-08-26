export class President {
  static #instance: President;

  public static getInstance(): President {
    if (!President.#instance) {
      President.#instance = new President();
    }
    return President.#instance;
  }
}
