import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {userDetailSelector} from '../../store/modules/User'
import {Typography} from '@material-ui/core'
import UserAddTodo from './UserAddTodo'
import UserFooter from './UserFooter'
import UserVisibleTodoList from './UserVisibleTodoList'

const UserDetail = () => {
    const {currentUser } = useSelector(userDetailSelector);
    
    return (
        <div>
            <Typography variant="h2" > {currentUser}'s todo </Typography>
            <UserAddTodo />
            <UserVisibleTodoList />
            <UserFooter currentUser={currentUser} />
        </div>
    )
}

export default UserDetail
