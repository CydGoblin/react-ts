import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const respose = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );

    dispatch<FetchTodoAction>({
      type: ActionTypes.fetchTodos,
      payload: respose.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
