class EditorMemento {
  #content: string;
  constructor(content: string) {
    this.#content = content;
  }

  public getContent(): string {
    return this.#content;
  }
}

export class Editor {
  #content: string;
  constructor() {
    this.#content = '';
  }

  public type(words: string): void {
    this.#content += words;
  }

  public getContent(): string {
    return this.#content;
  }

  public save(): EditorMemento {
    return new EditorMemento(this.getContent());
  }

  public restore(memento: EditorMemento): void {
    this.#content = memento.getContent();
  }
}
