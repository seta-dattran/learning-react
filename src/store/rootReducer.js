import { combineReducers } from 'redux'
// import todoReducer from './modules/Todo/reducers'
import { nameSpace as todoNameSpace, todos } from './modules/Todo';
const rootReducer = combineReducers({
    [todoNameSpace]: todos
})

export  default rootReducer;