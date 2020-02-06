import React from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core'

const TodoListByUser = ({todos}) => {
    return (
        <div>
            <List>
                {todos.map(todo => 
                    (<ListItem >
                        <ListItem button >
                            <ListItemText style={todo.completed ? {color: 'green'} : null} primary={todo.text} />
                        </ListItem>
                    </ListItem>)
                )}
            </List>
        </div>
    )
}
export default TodoListByUser;
