import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoActions {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const respose = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );

    dispatch<FetchTodoActions>({
      type: ActionTypes.fetchTodos,
      payload: respose.data,
    });
  };
};
