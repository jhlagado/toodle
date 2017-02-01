import { createSelector } from 'reselect'

const getVisibilityFilter = (state, props) => state.visibilityFilter
const getTodos = (state, props) => state.todos

export const makeGetVisibleTodos = () => {
  return createSelector(
    [ getVisibilityFilter, getTodos ],
    (visibilityFilter, todos) => {
      switch (visibilityFilter) {
        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(todo => !todo.completed)
        default:
          return todos
      }
    }
  )
}


// export const getVisibleTodos = createSelector(
//   [ getVisibilityFilter, getTodos ],
//   (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case 'SHOW_ALL':
//         return todos;
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed);
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed);
//       default:
//         return todos;  
//     }
//   }
// )
