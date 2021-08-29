import { Bulb } from './receiver';
import { RemoteControl } from './remote';
import { TurnOn, TurnOff } from './turnOnOff';

const bulb = new Bulb();

const remote = new RemoteControl();
remote.submit(new TurnOn(bulb));
remote.submit(new TurnOff(bulb));
