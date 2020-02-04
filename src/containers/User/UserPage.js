import React, {useState} from 'react'
import {TextField, Button, List, ListItem, ListItemText} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {addUser} from '../../store/modules/User'
import Link from 'redux-first-router-link'
import { makeStyles } from '@material-ui/core/styles';

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

const UserPage = () => {    
    const [value, setValue] = useState('');
    const allUsername = useSelector(state => state.userReducer.allName);        
    const dispatch = useDispatch();
    const classes = useStyles();
    
    //handle changes
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(value));
        setValue('');
    }
    
    return (
        <div className={classes.root}>            
            <form className={classes.app} onSubmit={onSubmit}>
                <TextField value={value} onChange={onChange} placeholder="Enter username here" />
                <br></br>
                <br></br>                
                <Button color="primary" type="submit" variant="contained">Add user</Button>
                <br></br>
                <br></br>
                <List>
                    {allUsername.map(username => 
                        (<ListItem >
                            <ListItemText primary={username} /> 
                        </ListItem>)
                    
                    )}
                </List>
                <Link to={`/todos`} >
                    All todos                    
                </Link>
            </form>            
        </div>        
    );
}

export default UserPage