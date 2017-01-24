/* External dependencies */
// import { combineReducers } from 'redux-immutable';
// import Immutable from 'immutable';
// import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

/* Internal dependencies */
// import routerReducer from './reducers/router-reducer'
import store from './store'

////////////////////////////////////////////////

/**
 * Combine reducers into root reducer and create store.
 * Note thate 'combineReducers' is a redux-immutable version
 */
// const rootReducer = combineReducers({
//   ...reducers,
//   routing: routerReducer
// })
// const initialState = Immutable.Map();

// const store = createStore(rootReducer, initialState,
//   // Enable redux dev tools
//   window.__REDUX_DEVTOOLS_EXTENSION__ 
//   && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

/* Create enhanced history object for router */
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

export default syncHistoryWithStore(hashHistory, store, {
  selectLocationState: createSelectLocationState()
});


////////////////////////////////////////////////

/* Exports */
// export { store, history }