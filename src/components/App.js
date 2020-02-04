import React from 'react'
import UserPage from '../containers/User/UserPage';
import TodoPage from '../containers/Todo/TodoPage'
import {useSelector} from 'react-redux'
import {NOT_FOUND} from 'redux-first-router'
import NotFound from './NotFound';
const pages =  {
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