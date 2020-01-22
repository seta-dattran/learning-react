import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import {List, IconButton, Typography} from '@material-ui/core';
import {DeleteRounded, DoneRounded} from '@material-ui/icons';

import _ from 'lodash';
const TodoList = ({ todos, selectTodo, delTodo, markDoneTodo, selectedTodos, isLoading, err }) => {    
  
  return (
    <>    
    <List>      
      <IconButton onClick={() => markDoneTodo(selectedTodos)}>
        <DoneRounded ></DoneRounded>
      </IconButton>
      <IconButton onClick={() => delTodo(selectedTodos)}>
        <DeleteRounded ></DeleteRounded>
      </IconButton>
      <Typography variant="body1">{isLoading ? 'Loading data...' : null}</Typography>
      <Typography variant="body1">{err}</Typography>
      <ul>
      {todos.length === 0 && <Typography variant="body1">No todos, relax!</Typography>}
      {todos.map(todo =>
        <Todo
          isSelected={_.indexOf(selectedTodos, todo.id) === -1 ? false : true}
          key={todo.id}
          {...todo}
          onClick={() => selectTodo(todo.id)}        
        />
      )}
      </ul>
    </List>
    </>
  );
  
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  selectTodo: PropTypes.func.isRequired
}

export default TodoList
