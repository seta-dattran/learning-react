import { combineReducers } from 'redux'
import { nameSpace as todoNameSpace, todos } from './modules/Todo';
import { nameSpace as userNameSpace, users} from './modules/User';

export  default extraReducers => combineReducers({
    [todoNameSpace]: todos,
    [userNameSpace]: users,
    ...extraReducers
})
