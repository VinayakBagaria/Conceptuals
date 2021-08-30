export interface WritingState {
  write(words: string): void;
}

export class DefaultState implements WritingState {
  public write(words: string): void {
    console.log(words);
  }
}

export class LowerState implements WritingState {
  public write(words: string): void {
    console.log(words.toLowerCase());
  }
}

export class UpperState implements WritingState {
  public write(words: string): void {
    console.log(words.toUpperCase());
  }
}
