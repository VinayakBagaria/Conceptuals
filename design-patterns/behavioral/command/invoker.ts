import { Command } from './allCommands';

export class RemoteControl {
  public submit(command: Command) {
    command.execute();
  }
}
