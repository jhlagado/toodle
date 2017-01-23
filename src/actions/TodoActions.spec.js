import findKey from 'lodash/findKey';

import * as actions from './TodoActions'
import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from './TodoActions'

describe('todo actions', () => {

  it('actions should not have any undefined symbols', () => {
    expect(
      findKey(actions, (value) => value === undefined)
    ).not.toBeDefined(); 
  })

  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux', 1)).toEqual({
      type: ADD_TODO,
      id: 1,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: SET_VISIBILITY_FILTER,
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: TOGGLE_TODO,
      id: 1
    })
  })
})
