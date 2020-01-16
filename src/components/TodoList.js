import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, selectTodo, delTodo, editTodo, selectedTodo }) => {
  console.log('render-todo-list');
  
  return (
    <>
      <button onClick={() => editTodo(selectedTodo)}>Edit</button>
      
      <button onClick={() => delTodo(selectedTodo)}>Delete</button>
      <ul>
      {todos.length === 0 && 'No todos, relax'}
      {todos.map(todo =>
        <Todo
          isSelected={todo.id === selectedTodo ? true : false}
          key={todo.id}
          {...todo}
          onClick={() => selectTodo(todo.id)}        
        />
      )}
  </ul>
  </>
  );
  
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectTodo: PropTypes.func.isRequired
}

export default TodoList
