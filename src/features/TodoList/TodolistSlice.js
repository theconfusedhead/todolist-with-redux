import { createSlice } from "@reduxjs/toolkit";
import { todoList } from "../../todoItems";

const initialState = {
  todoList: todoList,
};
export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoList = [
        ...state.todoList,
        {
          id: new Date().getTime(),
          taskName: payload,
          isCompleted: false,
        },
      ];
    },
    deleteTodo: (state, { payload: id }) => {
      state.todoList = state.todoList.filter((item) => item.id !== id);
    },
    completed: (state, { payload: id }) => {
      const newTodoList = state.todoList.find((item) => item.id === id);
      newTodoList.isCompleted = !newTodoList.isCompleted;
    },
  },
});
export const { addTodo, deleteTodo, completed } = todoListSlice.actions;

export default todoListSlice.reducer;
