import { createSelector } from "reselect";
import { VisibilityFilters } from "./constant";
import { nameSpace } from "./reducer";
const allId = state => state[nameSpace].allId;
const byId = state => state[nameSpace].byId;
const visibilityFilterType = state => state[nameSpace].visibleFilter;
const selectedTodos = state => state[nameSpace].selected;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

/*select todos from state*/
export const todoSelector = createSelector(
  byId,
  visibilityFilterType,
  selectedTodos,
  (byId, visibilityFilter, selectedTodos) => ({
    todos: getVisibleTodos(Object.values(byId), visibilityFilter),
    selectedTodos
  })
);
/*select filter from state*/
export const filterSelector = createSelector(
  state => state.visibilityFilter,
  (_, filter) => {    
    return filter;
  },
  (visibilityFilter, filter) => {        
    return visibilityFilter === filter;
  }
)


