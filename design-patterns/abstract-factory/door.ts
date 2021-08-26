export interface Door {
  getDescription(): string;
}

export class WoodenDoor implements Door {
  public getDescription() {
    return 'This is wooden door';
  }
}

export class IronDoor implements Door {
  public getDescription() {
    return 'This is iron door';
  }
}
