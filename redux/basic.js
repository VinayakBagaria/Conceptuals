function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = []; // Array<() => void>

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}

// Usages

const initialState = 0;
function rootReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return state + action.by;
    }
    default:
      return state;
  }
}

const store = createStore(rootReducer, initialState);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

for (const element of Array(10).entries()) {
  store.dispatch({
    type: 'add',
    by: 1,
  });
  if (element[0] === 5) {
    unsubscribe();
  }
}

console.log('finally');
console.log(store.getState());
