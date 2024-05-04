import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, completed } from "../features/TodoList/TodolistSlice";
const SingleTodo = ({ taskName, id, isCompleted }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(completed(id));
    console.log(isCompleted, "isCompleted");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: '1rem'
      }}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
        style={{ margin: 0 }}
      />
      {isCompleted ? (
        <p style={{ textDecoration: "line-through" ,margin: 0}}>{taskName}</p>
      ) : (
        <p style={{ margin: 0 }}>{taskName}</p>
      )}
      <button
        style={{ margin: 0 }}
        onClick={() => {
          dispatch(deleteTodo(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleTodo;
