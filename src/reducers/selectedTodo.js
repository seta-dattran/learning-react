
const selectedTodo = (state = "", action) => {
  switch (action.type) {
    case 'SELECT_TODO':
      return action.id;
    default:
      return state
  }
}

export default selectedTodo;
