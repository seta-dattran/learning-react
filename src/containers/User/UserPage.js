import React, {useState} from 'react'
import {TextField, Button} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {addUser} from '../../store/modules/User'
import Link from 'redux-first-router-link'
import UserList from '../../components/UserList'

const UserPage = () => {    
    const [value, setValue] = useState('');
    const allUsername = useSelector(state => state.userReducer.allName);        
    const dispatch = useDispatch();
    
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
        <form onSubmit={onSubmit}>
            <TextField value={value} onChange={onChange} placeholder="Enter username here" />
            <br></br>
            <br></br>                
            <Button color="primary" type="submit" variant="contained">Add user</Button>
            <br></br>
            <br></br>
            <UserList users={allUsername} />
            <Link to={`/todos`} >
                All todos                    
            </Link>
        </form>                    
    );
}

export default UserPage