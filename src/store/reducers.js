import { combineReducers } from 'redux';
import routerReducer from 'react-router-redux'

import { todos } from './Todo/reducers'
import visibilityFilterReducer from './visibilityFilter/reducers'
import modalReducer from './Modal/reducers'

export default combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilterReducer,
  modals: modalReducer,
  routing: routerReducer
});