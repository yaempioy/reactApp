import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types';


export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export function setVisability(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
