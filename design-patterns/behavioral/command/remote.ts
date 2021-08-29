import { Command } from './turnOnOff';

export class RemoteControl {
  public submit(command: Command) {
    command.execute();
  }
}
