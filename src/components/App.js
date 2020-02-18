import React from 'react'
import {useSelector} from 'react-redux'
import {NOT_FOUND} from 'redux-first-router'

import UserPage from '../containers/User/UserPage';
import UserDetail from '../containers/User/UserDetail';
import TodoPage from '../containers/Todo/TodoPage';
import NotFound from './NotFound';
import HomePage from './HomePage';
import { makeStyles } from '@material-ui/core/styles';
import GroupManagement from './GroupManagement/GroupManagement';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      height: '100vh',    
      backgroundColor: '#f5f5f5',
    },
    app: {
      backgroundColor: '#ffffff',
      maxWidth: 700,
      margin: 'auto',
      padding: theme.spacing(3)     
    }
  }));

const pages =  {
    HOME: <HomePage />,
    TODO: <TodoPage />,
    USERS: <UserPage />,
    USER: <UserDetail />,
    [NOT_FOUND]: <NotFound />
}

const App = () => {
    const classes = useStyles();

    //const location = useSelector(state => state.location);    
    return (
        <div className={classes.root}>            
            <div className={classes.app}>
                <GroupManagement />
            </div>
        </div>
    )
}

export default App;