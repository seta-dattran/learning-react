import { createSelector } from "reselect";
import { VisibilityFilters } from "./constant";
import { nameSpace as todoNameSpace } from "./reducer";
import { nameSpace as userNameSpace } from '../User';
import _ from 'lodash';


const allId = state => state[todoNameSpace].allId;
const byId = state => state[todoNameSpace].byId;
const visibilityFilterType = state => state[todoNameSpace].visibleFilter;
const selectedTodos = state => state[todoNameSpace].selected;
const isLoading = state => state[todoNameSpace].isLoading;
const err = state => state[todoNameSpace].err;
const currentUser = state => state[todoNameSpace].currentUser ;
const users  = state => state[userNameSpace];

/*select todos from state*/
export const todoSelector = createSelector(
  byId,
  visibilityFilterType,
  selectedTodos,
  isLoading,
  err,
  currentUser,
  users,
  (byId, visibilityFilter, selectedTodos, isLoading, err, selectedUser , users) => {            
    if(_.isEmpty(users.allName)){            
      return {
        todos: [],
        selectedTodos: [],
        isLoading: '',
        err: '',
        selectedUser: '',
        allUsername: []
      }
    }
    else {
      selectedUser = _.isEmpty(selectedUser) ? users.allName[0] : selectedUser;   
      const todoListByName =  users.byName[selectedUser].todos.map(todoId => byId[todoId]);          
      
      return  ({
        todos: getVisibleTodos(todoListByName, visibilityFilter),
        selectedTodos,
        isLoading,
        err,
        selectedUser,
        allUsername: users.allName
      })
    }    
  }
);

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

/*select filter from state*/
export const filterSelector = createSelector(
  state => state.visibilityFilter,
  (_, filter) => {    
    return filter;
  },
  (visibilityFilter, filter) => {        
    return visibilityFilter === filter;
  }
)


