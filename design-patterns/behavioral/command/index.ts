import { Bulb } from './receiver';
import { RemoteControl } from './invoker';
import { TurnOn, TurnOff } from './allCommands';

const bulb = new Bulb();

const remote = new RemoteControl();
remote.submit(new TurnOn(bulb));
remote.submit(new TurnOff(bulb));
