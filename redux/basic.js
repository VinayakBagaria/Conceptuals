function createStore(reducer, initialState) {
  let state = initialState;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
  }

  return {
    getState,
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

for (const pair of Array(10).entries()) {
  store.dispatch({
    type: 'add',
    by: pair[0],
  });
  console.log(store.getState());
}
