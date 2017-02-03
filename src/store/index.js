import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

import { todos } from './Todo/reducers'
import visibilityFilterReducer from './visibilityFilter/reducers'
import modalReducer from './Modal/reducers'
import authReducer from './auth/reducers'

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todos,
  visibilityFilter: visibilityFilterReducer,
  modals: modalReducer,
  routing: routerReducer
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer, initialState, 
  composeEnhancers(applyMiddleware(thunk))
);
