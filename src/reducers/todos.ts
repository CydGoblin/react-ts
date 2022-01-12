import { Todo, FetchTodoActions } from "../actions/index";
import { ActionTypes } from "../actions/types";

export const todosReducers = (state: Todo[] = [], action: FetchTodoActions) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
