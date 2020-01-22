import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectTodo, markDoneTodo, delTodo } from '../../store/modules/Todo/action'

import TodoList from '../../components/TodoList'
import {todoSelector} from '../../store/modules/Todo/index'

const VisibleTodoList = () => { 
  const a = useSelector(todoSelector);  
  const {todos, selectedTodos, isLoading,err} = a;
  const dispatch = useDispatch();  
  
  /*dispatch*/
  const todoDispatch = {
    delTodo : (ids) => dispatch(delTodo(ids)),
    selectTodo : (id) => dispatch(selectTodo(id)),
    markDoneTodo : (ids) => dispatch(markDoneTodo(ids)),    
  }   
  return (
    <div>
      <TodoList todos={todos} isLoading={isLoading} err={err} selectedTo  dos={selectedTodos} {...todoDispatch}/>
    </div>
  )
}

export default VisibleTodoList;
