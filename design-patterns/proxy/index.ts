import { LabDoor } from './door';
import { SecuredDoor } from './security';

const sd = new SecuredDoor(new LabDoor());
console.log(sd.open('invalid'));

console.log(sd.open('password'));
