import cuid from 'cuid';
import { createAction } from 'redux-actions';
import { ADD_TODO, TOGGLE_TODO } from './constants';

export const addTodo = createAction(ADD_TODO, text => {
  return {
    id: cuid(),
    text
  }
});
export const toggleTodo = createAction(TOGGLE_TODO, id => { return { id } });
