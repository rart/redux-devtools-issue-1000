const { createStore } = window.Redux;

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'Iframe window'
})())

let increment = () => store.dispatch({ type: 'counter/incremented' });
let onAction = () => document.getElementById('state').innerText = store.getState().value;

store.subscribe(onAction);

onAction();
