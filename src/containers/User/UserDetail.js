import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {userDetailSelector} from '../../store/modules/User'
import {Typography, ListItem, List, ListItemText } from '@material-ui/core'
import TodoList from '../../components/TodoList'
import VisibleTodoList from './UserVisibleTodoList'
import {selectTodo, markDoneTodo, delTodo } from '../../store/modules/Todo/action'
import UserAddTodo from './UserAddTodo'
import F from './UserFilterLink'
import UserFooter from './UserFooter'
import UserVisibleTodoList from './UserVisibleTodoList'

const UserDetail = () => {
    const {currentUser } = useSelector(userDetailSelector);

    return (
        <div>
            <Typography variant="h2" > {currentUser}'s todo </Typography>
            <UserAddTodo />
            <UserVisibleTodoList />
            <UserFooter />
        </div>
    )
}

export default UserDetail
