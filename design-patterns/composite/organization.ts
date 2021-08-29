import { Employee } from './employee';

export class Organization {
  #employees: Array<Employee>;

  constructor() {
    this.#employees = [];
  }

  public addEmployee(employee: Employee): void {
    this.#employees.push(employee);
  }

  public getNetSalaries(): number {
    return this.#employees.reduce(
      (accumulator, current) => accumulator + current.getSalary(),
      0
    );
  }
}
