import React, { useState } from "react";

const Todo = ({ todo, remove, update, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = (e) => {
    console.log(e.target.id);
    remove(e.target.id);
  };

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    update(todo.id, task);
    toggleForm();
  };

  const toggleCompleted = (e) => {
    toggleComplete(e.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input value={task} onChange={handleChange} />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-button">
          <button onClick={toggleForm}> Edit</button>
          <button id={todo.id} onClick={handleClick}>
            Delect
          </button>
        </div>
      </div>
    );
  }
  return result;
};

export default Todo;
