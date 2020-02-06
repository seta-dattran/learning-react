import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {selectTodo, markDoneTodo, delTodo } from '../../store/modules/Todo/action'
import TodoList from '../../components/TodoList'
import {userDetailSelector} from '../../store/modules/User'

const UserVisibleTodoList = () => { 
  const {currentUser, todos, selectedTodos}  = useSelector(userDetailSelector);    
  
  const dispatch = useDispatch();  
  
  /*dispatch*/
  const todoDispatch = {
    delTodo : (ids, username) => dispatch(delTodo(ids, username)),
    selectTodo : (id) => dispatch(selectTodo(id)),
    markDoneTodo : (ids) => dispatch(markDoneTodo(ids)),    
  }   
  return (
    <div>
      <TodoList todos={todos} username={currentUser}  selectedTodos={selectedTodos} {...todoDispatch}/>
    </div>
  )
}

export default UserVisibleTodoList;
