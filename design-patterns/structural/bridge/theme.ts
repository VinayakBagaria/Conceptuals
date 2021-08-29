export interface Theme {
  getColor(): string;
}

export class DarkTheme implements Theme {
  getColor(): string {
    return '#000';
  }
}

export class LightTheme implements Theme {
  getColor(): string {
    return '#fff';
  }
}
