import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, fetchData } from '../../store/modules/Todo/action'
import {TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  btnAdd: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }
}))
const UserAddTodo = () => {
  
  const currentUser = useSelector(state => state.location.payload.username);
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const handleFetchData =  (e) => {
    e.preventDefault();
    dispatch(fetchData());
  }

  const onChangeInput = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = React.useCallback((e) => {
    e.preventDefault()
    if (!value.trim()) {
      return
    }
    console.log(currentUser);
    
    dispatch(addTodo(value, currentUser));
    setValue('');
  }, [value, dispatch]);

  return (
    <div>
      <form onSubmit={onSubmit}>        
        <TextField 
          onChange={onChangeInput}
          value={value} 
          label="Type here" 
          variant="outlined" 
          />
        
        <Button
          className={classes.btnAdd}
          type="submit" variant="contained" color="primary">Add to do</Button>
      </form>
      <Button onClick={handleFetchData} className={classes.btnAdd} variant="contained" color="primary" >Fetch data</Button>
    </div>
  )
};

export default UserAddTodo;

