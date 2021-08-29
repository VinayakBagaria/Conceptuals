export interface Employee {
  getName(): string;
  getSalary(): number;
}

export class Developer implements Employee {
  #name: string;
  #salary: number;

  constructor(name: string, salary: number) {
    this.#name = name;
    this.#salary = salary;
  }

  public getName(): string {
    return this.#name;
  }

  public getSalary(): number {
    return this.#salary;
  }
}

export class Designer implements Employee {
  #name: string;
  #salary: number;

  constructor(name: string, salary: number) {
    this.#name = name;
    this.#salary = salary;
  }

  public getName(): string {
    return this.#name;
  }

  public getSalary(): number {
    return this.#salary;
  }
}
