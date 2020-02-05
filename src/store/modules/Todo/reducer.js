import _ from 'lodash';
import { VisibilityFilters } from './constant';
import * as actions from './action'

const nameSpace = "todoReducer";

const initialState = {
  allId: [],
  byId: {},
  selected: [],
  visibleFilter: VisibilityFilters.SHOW_ALL,
  isLoading: false,
  err: '',
  currentUser: ''
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO_WITH_ID:
      const id = action.payload.postId;      
      return {
        ...state,
        allId: [...state.allId, id],
        byId: {
          ...state.byId,
          [id]: {
            id, 
            text: action.payload.text,
            completed: false,            
          }
        }
      };
    case actions.DEL_TODO:
      const { ids: delIds } = action.payload;      
      return {
        ...state,
        allId: _.filter(state.allId, (e) => {
          return _.indexOf(delIds, e) === -1;
        }),
        byId: _.omit(state.byId, delIds),
        selected: []
      }
    case actions.MARK_AS_DONE:
      const { ids: doneIds } = action.payload;
      const newById = doneIds.reduce((acc, delId)  => ({
        ...acc,
        [delId]: {
          ...state.byId[delId],           
          completed: true
        }
      }),state.byId)

      return {
        ...state,
        byId:  newById,
        selected: []
      }
    case actions.SELECT_TODO: 
      const { id: selectedId } = action.payload;          
      const idx  = _.indexOf(state.selected, selectedId) ;
      let newSelectedArr = [];
      if(idx === -1 ){
        newSelectedArr = [...state.selected,selectedId]
      }
      else {
        newSelectedArr = _.filter(state.selected, e => {
          return (e !== selectedId);
        } )
      }
      
      return {
        ...state,
        selected: newSelectedArr
      }
    case actions.SET_VISIBILITY_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        visibleFilter: VisibilityFilters[filter]
      }
    }
    case actions.FETCH_DATA_BEGIN: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actions.FETCH_DATA_SUCCESS: {      
      
      return {
        ...state,
        isLoading: false,
        byId: action.payload.todos.reduce((acc, todo)  => ({
          ...acc,
          [todo.id]: {
            id: todo.id,
            text: todo.title,
            completed: todo.completed            
          }
        }), {
          ...state.byId
        }),
        allId: action.payload.todos.reduce((acc, todo) => [...acc, todo.id],state.allId)
      }
    }
    case actions.FETCH_DATA_FAIL: {
      return {
        ...state,
        isLoading: false,
        err: action.payload.message
      }
    }     
    case actions.SEL_USER:
      return {
          ...state,
          currentUser: action.payload.username
      }
    default:
      return state;
  }
};

export {
  nameSpace,
  todos
}
