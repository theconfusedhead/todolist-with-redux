import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./features/TodoList/TodolistSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
