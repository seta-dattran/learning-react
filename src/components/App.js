import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/Todo/AddTodo'
import VisibleTodoList from '../containers/Todo/VisibleTodoList'
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'

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

const App = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>      
      <div className={classes.app}>
      <Typography variant="h2" >Todo App</Typography>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    </div>
  );
}

export default App
