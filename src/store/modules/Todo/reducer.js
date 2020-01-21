import _ from 'lodash';
import { uuidv4 } from './utils';
import { VisibilityFilters } from './constant';

const nameSpace = "todoReducer";

const initialState = {
  allId: [],
  byId: {},
  selected: [],
  visibleFilter: VisibilityFilters.SHOW_ALL
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const id = uuidv4();
      return {
        ...state,
        allId: [...state.allId, id],
        byId: {
          ...state.byId,
          [id]: {
            id, 
            text: action.payload.text,
            completed: false
          }
        }
      };
    case "DEL_TODO":
      const { ids: delIds } = action.payload;
      console.log(delIds);
      
      return {
        ...state,
        allId: _.filter(state.allId, (e) => {
          return _.indexOf(delIds, e) === -1;
        }),
        byId: _.omit(state.byId, delIds),
        selected: []
      }
    case "MARK_AS_DONE":
      const { ids: doneIds } = action.payload;
      const newById = doneIds.reduce((acc, delId)  => ({
        ...acc,
        [delId]: {
          ...state.byId[delId],           
          completed: true
        }
        }),{...state.byId}
      )

      return {
        ...state,
        byId:  newById,
        selected: []
      }
    case "SELECT_TODO": 
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
              
      // console.log(selectedId);
      // console.log(idx);
      // console.log(newSelectedArr);
      
      return {
        ...state,
        selected: newSelectedArr
      }
    case "SET_VISIBILITY_FILTER": {
      const { filter } = action.payload;
      return {
        ...state,
        visibleFilter: VisibilityFilters[filter]
      }
    }
    default:
      return state;
  }
};

export {
  nameSpace,
  todos
}
