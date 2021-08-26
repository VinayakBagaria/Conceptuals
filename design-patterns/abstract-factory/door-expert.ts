import { Door, WoodenDoor, IronDoor } from './door';
import { Expert, Carpenter, Welder } from './expert';

export interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): Expert;
}

export class WoodenDoorFactory implements DoorFactory {
  public makeDoor() {
    return new WoodenDoor();
  }

  public makeFittingExpert() {
    return new Carpenter();
  }
}

export class IronDoorFactory implements DoorFactory {
  public makeDoor() {
    return new IronDoor();
  }

  public makeFittingExpert() {
    return new Welder();
  }
}
