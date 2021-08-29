import { Door, WoodenDoor, IronDoor } from './door';
import { Expert, Carpenter, Welder } from './expert';

export interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): Expert;
}

export class WoodenDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new WoodenDoor();
  }

  public makeFittingExpert(): Expert {
    return new Carpenter();
  }
}

export class IronDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new IronDoor();
  }

  public makeFittingExpert(): Expert {
    return new Welder();
  }
}
