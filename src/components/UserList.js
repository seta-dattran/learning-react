import React from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core'
import Link from 'redux-first-router-link'
const UserList = ({users}) => {
    return (
        <div>
            <List>
                {users.map(username => 
                    (<ListItem >
                        <ListItem component={Link} button href={`/user/${username}`} >
                            <ListItemText primary={username} />
                        </ListItem>
                    </ListItem>)
                )}
            </List>
        </div>
    )
}
export default UserList;
