interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {};

  public set(newValue: T): void {
    this.db[newValue.id] = newValue;
  }
  get(id: string): T | undefined {
    return this.db[id];
  }
}

// usage
interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

const pokemonDb = new InMemoryDatabase<Pokemon>();
pokemonDb.set({
  id: 'Bulbasaur',
  attack: 50,
  defense: 10,
});
console.log(pokemonDb.get('Bulbasaur'));
