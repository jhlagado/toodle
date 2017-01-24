/* External dependencies */
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { createStore } from 'redux';

/* Internal dependencies */
import routerReducer from '../reducers/router-reducer'
import reducers from '../reducers'

////////////////////////////////////////////////

/**
 * Combine reducers into root reducer and create store.
 * Note thate 'combineReducers' is a redux-immutable version
 */
const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})
const initialState = Immutable.Map();

export default createStore(rootReducer, initialState,
  // Enable redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__()
);

