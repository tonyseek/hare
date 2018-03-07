import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from '../reducers';
import { DEBUG } from '../config';

function getEnhancer() {
  /* eslint-disable no-underscore-dangle */
  if (
    DEBUG && typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    return window.__REDUX_DEVTOOLS_EXTENSION__();
  }
  /* eslint-enable */
  return undefined;
}

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState, getEnhancer());
}
