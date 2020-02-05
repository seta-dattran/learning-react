import {createSelector} from 'reselect';
import { nameSpace as todoNameSpace} from '../Todo';
import { nameSpace as userNameSpace} from './index';
import {isEmpty} from 'lodash'


const currentUser = state => state.location.payload.username;
const todos = state => state[todoNameSpace].byId;
const users = state => state[userNameSpace].byName;
const selectedTodos = state => state[todoNameSpace].selected;

export const userDetailSelector = createSelector(
    currentUser,
    todos,
    users,
    selectedTodos,
    (currentUser, todos, users, selectedTodos) => {
        console.log(currentUser, todos, users);
        if(isEmpty(users) || isEmpty(currentUser)) {
            return ({
                currentUser,
                todos: [],
                selectedTodos: ''
            })
        }
        const todoByUsename = users[currentUser].todos.map(todoId => todos[todoId]);                
        
        return ({
            currentUser,
            todos: todoByUsename,
            selectedTodos
        })
    }
)
