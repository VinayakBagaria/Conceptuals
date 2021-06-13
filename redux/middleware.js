// B/w dispatching an action, and the moment it reaches the reducer
// storeAPI -> dispatch, getState
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      return next(action);
    };
  };
}

// Arrow functions
const anotherExampleMiddleware = (storeAPI) => (next) => (action) =>
  next(action);

// Logger middleware
const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching action: ', action);
  const result = next(action);
  console.log('next state: ', storeAPI.getState());
  return result;
};
