import { Door } from './door';

export class SecuredDoor {
  #door: Door;

  constructor(door: Door) {
    this.#door = door;
  }

  public open(password: string): boolean {
    if (password === 'password') {
      this.#door.open();
      return true;
    } else {
      return false;
    }
  }

  public close(): void {
    this.#door.close();
  }
}
