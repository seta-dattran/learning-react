import React from 'react'
import PropTypes from 'prop-types'
import {ListItem, ListItemText,Checkbox, ListItemIcon} from '@material-ui/core'


const Todo = ({ onClick, completed, text, isSelected }) => (
  
  <ListItem
    button
    selected={isSelected}
    onClick={onClick}         
  >
    <ListItemIcon>
      <Checkbox
        edge="start"                        
        checked={isSelected}        
      />
    </ListItemIcon>
    <ListItemText primary={text} style={completed ? {color: 'green'} : null}/>    
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
