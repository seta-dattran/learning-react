import React, {useEffect} from 'react'
import Footer from '../../components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import {Typography} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import { Autocomplete} from '@material-ui/lab'
import { useSelector, useDispatch} from 'react-redux'
import {selUser} from '../../store/modules/User'
import Link from 'redux-first-router-link'


const TodoPage = () => {
  const allUsername = useSelector(state => state.userReducer.allName);
  const dispatch = useDispatch();
  
  // set default user
  useEffect(() => {
    dispatch(selUser(allUsername[0]))    
  }, [])

  const onChange = (e, value) => {    
    dispatch(selUser(value));    
  }
  return (        
    <div>
      <Typography variant="h2" >Todo App</Typography>
      <Autocomplete
        onChange={onChange}
        defaultValue={allUsername[0]}                                                
        options={allUsername}                
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="User name" variant="outlined" fullWidth />
        )}
      />
      <br></br>      
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <br></br>
      <Link to='/users' >All users</Link>      
    </div>
  );
}

export default TodoPage
