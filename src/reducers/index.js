import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import selectedTodo from './selectedTodo'

export default combineReducers({
  todos,
  visibilityFilter,
  selectedTodo
})
