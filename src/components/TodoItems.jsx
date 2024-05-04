import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoItems = () => {
  const { todoList } = useSelector((store) => store.todoList);

  return (
    <div style={{ padding: "1rem 2rem" }}>
      {todoList.map((item) => {
        return (
          <div key={item.id} style={{margin: '0.5rem 0'}}>
            <SingleTodo {...item}/>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
