import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/modules/Todo/action'
import {TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  btnAdd: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }
}))
const AddTodo = () => {  
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const onChangeInput = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = React.useCallback((e) => {
    e.preventDefault()
    if (!value.trim()) {
      return
    }
    dispatch(addTodo(value));
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
    </div>
  )
};

export default AddTodo;

