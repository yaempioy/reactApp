import { createStore } from 'redux'

import todoApp from './reducers'

import { addTodo, toggleTodo, setVisibilityFilter } from './actions/creators';
import { VisibilityFilters } from './actions/types'

let store = createStore(todoApp);

console.log('Initial', store.getState())

let unsubscribe = store.subscribe(() =>
  console.log('Subscribe', store.getState())
)
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
