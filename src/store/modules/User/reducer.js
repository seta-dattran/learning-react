import * as actions from './action'

const nameSpace = "userReducer";

const initState = {
    allName: [],    
}

const users  = (state = initState , action ) => {
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