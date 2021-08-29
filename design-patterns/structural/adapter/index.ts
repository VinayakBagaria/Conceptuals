import { Lion, AfricanLion, AsianLion, WildDogAdapter } from './animal';

class Hunter {
  public hunt(lion: Lion) {
    lion.roar();
  }
}

const h = new Hunter();
h.hunt(new AfricanLion());
h.hunt(new AsianLion());

const d = new WildDogAdapter();
h.hunt(d);
