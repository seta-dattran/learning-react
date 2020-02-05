import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {userDetailSelector} from '../../store/modules/User'
import {Typography, ListItem, List, ListItemText } from '@material-ui/core'
import TodoList from '../../components/TodoList'
//import {selectTodo, markDoneTodo, delTodo } from '../../store/modules/Todo/action'

const UserDetail = () => {
    const {currentUser, todos, selectedTodos} = useSelector(userDetailSelector);        
    const dispatch = useDispatch();  
  
    /*dispatch*/
    // const todoDispatch = {
    //   delTodo : (ids) => dispatch(delTodo(ids)),
    //   selectTodo : (id) => dispatch(selectTodo(id)),
    //   markDoneTodo : (ids) => dispatch(markDoneTodo(ids)),    
    // }

    return (
        <div>
            <Typography variant="h2" > {currentUser}'s todo </Typography>
            {/* <TodoList todos={todos} selectedTodos={selectedTodos} {...todoDispatch}  /> */}
            <List>
                {todos.map(todo => {
                    return (
                    <ListItem>
                        <ListItemText primary={todo.text} />
                    </ListItem>)
                })}
            </List>
        </div>
    )
}

export default UserDetail
