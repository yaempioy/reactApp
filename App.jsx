import React, {Component} from 'react';
import {connect} from 'react-redux'

import AddTodo from './component/AddTodo';

class App extends Component {
   render() {
      const { dispatch, visibleTodos } = this.props

      return (
         <div>
            <AddTodo onAddClick={text => dispatch(addTodo(text))}>
            </AddTodo>
         </div>
      )
   }
}

function select(state) {
   return {
      visibleTodos: state.todos
   }
}

export default connect(select)(App)
