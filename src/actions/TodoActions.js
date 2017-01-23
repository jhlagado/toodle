import cuid from 'cuid';
import makeActionCreator from './makeActionCreator.js'

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text:string, id:string) => ({
  type: ADD_TODO,
  id: id || cuid(),
  text
})

export const setVisibilityFilter = makeActionCreator(SET_VISIBILITY_FILTER, 'filter')
export const toggleTodo = makeActionCreator(TOGGLE_TODO, 'id');

