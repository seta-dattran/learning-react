import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, isSelected }) => (
  <div >
    <li      
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: isSelected ? 'green' : 'black'
      }}
    >
      {text}    
    </li>    
  </div >
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
