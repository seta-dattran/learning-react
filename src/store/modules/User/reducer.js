import * as actions from './action'
import {ADD_TODO_WITH_ID} from '../Todo/action'
import {isEmpty} from 'lodash'
const nameSpace = "userReducer";

const initState = {
    allName: [],
    byName: {}
}

const users  = (state = initState , action ) => {

    switch(action.type){
        case actions.ADD_USER:            
            
            return {
                ...state,
                allName: [...state.allName, action.payload.username],
                byName: {
                    ...state.byName,
                    [action.payload.username]: {
                        username: action.payload.username,
                        todos: []
                    }
                }
            }
        case ADD_TODO_WITH_ID:            
            const username = action.payload.username;
            if (isEmpty(username)){
                return state
            }
            else {
                return {
                    ...state,
                    byName: {
                        ...state.byName,
                        [username]: {
                            ...state.byName.username,
                            todos: [...state.byName[username].todos, action.payload.postId ]
                        }
                    }
                }
            }                        
            
        default: 
            return state;
    }
}

export {
    nameSpace,
    users
}