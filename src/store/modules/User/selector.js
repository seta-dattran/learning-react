import {createSelector} from 'reselect';
import { nameSpace as todoNameSpace} from '../Todo';
import { nameSpace as userNameSpace} from './index';
import {isEmpty} from 'lodash';
import {getVisibleTodos} from '../Todo/selector'

const currentUser = state => state.location.payload.username;
const todos = state => state[todoNameSpace].byId;
const selectedTodos = state => state[todoNameSpace].selected;
const filter = state => state[todoNameSpace].visibleFilter;
const users = state => state[userNameSpace].byName;

export const userDetailSelector = createSelector(
    currentUser,
    todos,
    users,
    selectedTodos,
    filter,
    (currentUser, todos, users, selectedTodos, filter) => {
        
        if(isEmpty(users) || isEmpty(currentUser)) {
            return ({
                currentUser,
                todos: [],
                selectedTodos: ''
            })
        }
        const todoByUsername = users[currentUser].todos.map(todoId => todos[todoId]);                
        
        return ({
            currentUser,
            todos: getVisibleTodos(todoByUsername, filter),
            selectedTodos            
        })
    }
)
