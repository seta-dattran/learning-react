import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectTodo, editTodo, delTodo } from '../actions'
import { VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'

import {createSelector} from 'reselect'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

/*select data from state*/
const todoSelector = createSelector(
  state => state.todos,  
  state => state.visibilityFilter,
  state => state.selectedTodo,
  (todos, VisibilityFilter, selectedTodo) => ({
    todos: getVisibleTodos(todos, VisibilityFilter),
    selectedTodo
  })
) 


const VisibleTodoList = () => { 
  const a = useSelector(todoSelector);
  console.log(typeof(a));
  
  const {todos, selectedTodo} = a;
  const dispatch = useDispatch();
  
  /*dispatch*/
  const todoDispatch = {
    delTodo : (id) => dispatch(delTodo(id)),
    selectTodo : (id) => dispatch(selectTodo(id)),
    editTodo : (id, text) => dispatch(editTodo(id , text)),
  }   
  return (
    <div>
      <TodoList todos={todos} selectedTodo={selectedTodo} {...todoDispatch}/>
    </div>
  )
}

export default VisibleTodoList;
