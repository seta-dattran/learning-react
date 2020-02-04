export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SELECT_TODO = 'SELECT_TODO';
export const MARK_AS_DONE = 'MARK_AS_DONE';
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
export {
  SEL_USER,
  selUser
}
from '../User'
export const addTodo = (text, username) => ({
  type: ADD_TODO,
  payload: {
    text,
    username
  }
})

export const delTodo = (ids, username) => ({
  type: DEL_TODO,
  payload: {
    ids,
    username
  }
})

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: {
    text,
    id
  }
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
})

export const selectTodo = id => ({
  type: SELECT_TODO,
  payload: {
    id
  }
})

export const markDoneTodo = ids => ({
  type: MARK_AS_DONE,
  payload: {
    ids
  }
})

export const fetchData = () => ({
  type: FETCH_DATA_BEGIN
})

export const fetchDataSuccess = (todos) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {
    todos
  }
})

export const fetchDataFail = (message) => ({
  type: FETCH_DATA_FAIL,
  payload: {
    message
  }
})

