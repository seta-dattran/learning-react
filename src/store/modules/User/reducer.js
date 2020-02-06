import * as actions from './action'
import { ADD_TODO_WITH_ID, DEL_TODO} from '../Todo/action'
import {isEmpty} from 'lodash'
import _ from 'lodash'

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
                            ...state.byName[username],
                            todos: [...state.byName[username].todos, action.payload.postId ]
                        }
                    }
                }
            }                        
            
        case DEL_TODO:
            console.log(action.payload);            
            const delIds = action.payload.ids;
            const delByUsername = action.payload.username;
            return {
                ...state,
                byName: {
                    ...state.byName,
                    [delByUsername]: {
                        ...state.byName[delByUsername],
                        todos: _.filter(state.byName[delByUsername].todos,todo => {
                            return _.indexOf(delIds,todo) === -1;
                        })
                        
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