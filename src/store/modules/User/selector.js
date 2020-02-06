import {createSelector} from 'reselect';
import { nameSpace as todoNameSpace} from '../Todo';
import { nameSpace as userNameSpace} from './index';
import {isEmpty} from 'lodash';
import {getVisibleTodos} from '../Todo/selector'
import {VisibilityFilters} from '../Todo'

const currentUser = state => state.location.payload.username;
const filterUrl = state => state.location.payload.filter;
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
    filterUrl,
    (currentUser, todos, users, selectedTodos, filter, filterUrl) => {
        const visibleFilter = getVisibleFilter(filterUrl);
        if(isEmpty(users) || isEmpty(currentUser)) {
            return ({
                currentUser,
                todos: [],
                selectedTodos: ''
            })
        }
        const todoByUsername = users[currentUser].todos.map(todoId => todos[todoId]);
        if(isEmpty(filterUrl)){
            return ({
                currentUser,
                todos: getVisibleTodos(todoByUsername, filter),
                selectedTodos            
            })
        }
        else {
            return ({
                currentUser,
                todos: getVisibleTodos(todoByUsername, visibleFilter),
                selectedTodos            
            })
        }   
    }
)

const getVisibleFilter = (filter) => {
    switch(filter){
        case 'all':
            return VisibilityFilters.SHOW_ALL
        case 'completed':
            return VisibilityFilters.SHOW_COMPLETED
        case 'active':
            return VisibilityFilters.SHOW_ACTIVE
        default:
            return VisibilityFilters.SHOW_ALL
    }
}