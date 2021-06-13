// Observer
type Listener<EventType> = (event: EventType) => void;
function createObserver<EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
} {
  let listeners: Listener<EventType>[] = [];

  return {
    subscribe: (listener: Listener<EventType>): (() => void) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    publish: (event: EventType) => {
      listeners.forEach((l) => l(event));
    },
  };
}

interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}

interface AfterSetEvent<T> {
  value: T;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;

  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;
}

// Factory pattern
function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    // Singleton pattern
    static instance: InMemoryDatabase = new InMemoryDatabase();

    private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
    private afterAddListeners = createObserver<AfterSetEvent<T>>();

    private constructor() {}

    public set(newValue: T): void {
      this.beforeAddListeners.publish({
        newValue,
        value: this.db[newValue.id],
      });
      this.db[newValue.id] = newValue;
      this.afterAddListeners.publish({
        value: newValue,
      });
    }

    public get(id: string): T | undefined {
      return this.db[id];
    }

    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
      return this.beforeAddListeners.subscribe(listener);
    }

    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
      return this.afterAddListeners.subscribe(listener);
    }
  }

  return InMemoryDatabase;
}

// usage
interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

const PokemonDb = createDatabase<Pokemon>();

const unsubscribe = PokemonDb.instance.onAfterAdd(({ value }) => {
  console.log(value);
});

PokemonDb.instance.set({
  id: 'Bulbasaur',
  attack: 50,
  defense: 10,
});

unsubscribe();

PokemonDb.instance.set({
  id: 'Spinosaur',
  attack: 100,
  defense: 20,
});
