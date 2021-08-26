export interface Expert {
  getJob(): string;
}

export class Carpenter implements Expert {
  public getJob() {
    return 'I can only fit wooden doors';
  }
}

export class Welder implements Expert {
  public getJob() {
    return 'I can only fit iron doors';
  }
}
