export interface Door {
  open(): void;
  close(): void;
}

export class LabDoor implements Door {
  public open(): void {
    console.log('Opening lab door');
  }

  public close(): void {
    console.log('Closing lab door');
  }
}
