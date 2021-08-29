import { Theme } from './theme';

export interface WebPage {
  getContent(): string;
}

export class About implements WebPage {
  #theme: Theme;

  constructor(theme: Theme) {
    this.#theme = theme;
  }

  public getContent(): string {
    return `About page in ${this.#theme.getColor()}`;
  }
}

export class Careers implements WebPage {
  #theme: Theme;

  constructor(theme: Theme) {
    this.#theme = theme;
  }

  public getContent(): string {
    return `Careers page in ${this.#theme.getColor()}`;
  }
}
