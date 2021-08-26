import { DoorFactory, WoodenDoorFactory, IronDoorFactory } from './door-expert';

const wooden: DoorFactory = new WoodenDoorFactory();
console.log(wooden.makeDoor().getDescription());
console.log(wooden.makeFittingExpert().getJob());

const iron: DoorFactory = new IronDoorFactory();
console.log(iron.makeDoor().getDescription());
console.log(iron.makeFittingExpert().getJob());
