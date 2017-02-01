import { combineReducers } from 'redux';
import routerReducer from 'react-router-redux'

import { todos } from './Todo/reducers'
import visibilityFilter from './visibilityFilter/reducers'

export default combineReducers({
  todos,
  visibilityFilter,
  routing: routerReducer
})