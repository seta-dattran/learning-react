import React, {useEffect} from 'react'
import {Typography} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import { Autocomplete} from '@material-ui/lab'
import { useSelector, useDispatch} from 'react-redux'
import {selUser} from '../../store/modules/User'
import Link from 'redux-first-router-link'
import TodoListByUser from './TodoListByUser'
import {todoSelector} from '../../store/modules/Todo'

const TodoPage = () => {
  const {allUsername,selectedUser, todos} = useSelector(todoSelector);
  
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
      <TodoListByUser todos={todos} />
      <Link to='/users' >All users</Link>      
    </div>
  );
}

export default TodoPage
