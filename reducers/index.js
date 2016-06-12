import {combineReducers} from 'redux'
import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from '../actions/types'
import { SHOW_ALL } from VisibilityFilters

function todos(state = [], action) {

  console.log('todos splitting reducer State = ${state}, Action = ${action}');

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
    case: TOGGLE_TODO
      return state.todos.map((todo, index) => {
        if (index === action.index) {
          // *****
          return Object().assign({}, todo, {
            completed: !todo.completed
          })
        }
        // *****
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {

  console.log('visibility splitting reducer State = ${state}, Action = ${action}');

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
