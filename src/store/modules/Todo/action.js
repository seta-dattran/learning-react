

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    text
  }
})

export const delTodo = ids => ({
  type: 'DEL_TODO',
  payload: {
    ids
  }
})

export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  payload: {
    text,
    id
  }
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter
  }
})

export const selectTodo = id => ({
  type: 'SELECT_TODO',
  payload: {
    id
  }
})

export const markDoneTodo = ids => ({
  type: 'MARK_AS_DONE',
  payload: {
    ids
  }
})

export const fetchData = () => ({
  type: 'FETCH_DATA_BEGIN'
})

export const fetchDataSuccess = (todos) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: {
    todos
  }
})

export const fetchDataFail = (message) => ({
  type: 'FETCH_DATA_FAIL',
  payload: {
    message
  }
})

