import React from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core'

const UserList = ({users}) => {
    return (
        <div>
            <List>
                {users.map(username => 
                    (<ListItem >
                        <ListItemText primary={username} /> 
                    </ListItem>)
                )}
            </List>
        </div>
    )
}
export default UserList;
