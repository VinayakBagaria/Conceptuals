import { RadioStation } from './radioStation';

export class StationList {
  #stations: Array<RadioStation>;
  #position: number;

  constructor() {
    this.#stations = [];
    this.#position = 0;
  }

  public addStation(station: RadioStation) {
    this.#stations.push(station);
  }

  public hasNext(): boolean {
    return this.#position < this.#stations.length;
  }

  public next(): RadioStation {
    return this.#stations[this.#position++];
  }
}
