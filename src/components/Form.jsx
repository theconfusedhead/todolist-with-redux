import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoList/TodolistSlice";
const Form = () => {
  const [value, serValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    dispatch(addTodo(value));
    serValue("");
  };
  const handleChange = (e) => {
    serValue(e.target.value);
  };
  return (
    <div style={{  padding: "1rem 2rem" }}>
      <form onSubmit={handleSubmit}>
        <p style={{textAlign: "center", margin:'1rem 0',fontSize: '2rem'}}>ToDo List</p>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          style={{ width: "80%", fontSize: "20px" }}
        />
        <button type="submit" style={{ width: "20%", fontSize: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
