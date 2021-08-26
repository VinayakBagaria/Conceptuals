export class UserBuilder {
  name: string;
  age: number;
  phone: string;

  constructor(private nameValue: string) {
    this.name = nameValue;
    this.age = 0;
    this.phone = '';
  }

  setAge(value: number): UserBuilder {
    this.age = value;
    return this;
  }

  setPhone(value: string): UserBuilder {
    this.phone = value;
    return this;
  }

  build(): User {
    return new User(this);
  }
}

export class User {
  #name: string;
  #age: number;
  #phone: string;

  constructor(builder: UserBuilder) {
    this.#name = builder.name;
    this.#age = builder.age;
    this.#phone = builder.phone;
  }

  public getCredentials(): string {
    return `
      Name: ${this.#name}
      Age: ${this.#age}
      Phone: ${this.#phone};
    `;
  }
}
