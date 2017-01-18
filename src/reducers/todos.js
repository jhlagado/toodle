import Immutable from 'immutable';

const todo = (state = Immutable.fromJS({}), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
//       return state.set('completed', !state.completed)
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = Immutable.fromJS([]), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(todo(undefined, action));

    case 'TOGGLE_TODO':
      return state.map(function(t){
        return todo(t, action)
      })
//       return state.map(t =>
//         todo(t, action)
//       )
    default:
      return state
  }
}

export default todos
