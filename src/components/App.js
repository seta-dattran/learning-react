import React from 'react'
import {useSelector} from 'react-redux'
import {NOT_FOUND} from 'redux-first-router'

import UserPage from '../containers/User/UserPage';
import TodoPage from '../containers/Todo/TodoPage';
import NotFound from './NotFound';
import HomePage from './HomePage';

const pages =  {
    HOME: <HomePage />,
    TODO: <TodoPage />,
    USER: <UserPage />,
    [NOT_FOUND]: <NotFound />
}

const App = () => {
    const location = useSelector(state => state.location);    
    return (
        <div>            
            {pages[location.type]}
        </div>
    )
}

export default App;