import * as actions from './action'
import {uuidv4} from './utils'

const nameSpace = "userReducer";

const initState = {
    allId: [],
    byId: {
        id: {
            username: 'test',
            todos: [1,2,3]
        }
    }

}

const users  = (state = initState , action ) => {
    const id = uuidv4();

    switch(action.type){
        case actions.ADD_USER:            
            
            return {
                ...state,
                allName: [...state.allName, action.payload.username]
            }
        default: 
            return state;
    }
}

export {
    nameSpace,
    users
}