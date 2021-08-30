import { WritingState } from './writer';

export class Editor {
  #state: WritingState;
  constructor(state: WritingState) {
    this.#state = state;
  }

  public setState(state: WritingState) {
    this.#state = state;
  }

  public type(words: string): void {
    this.#state.write(words);
  }
}
