import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [todos, settodo] = useState([{ task: "sample task", id: uuidv4(), isdone:false },]);
  const [newtodo, setnewTodo] = useState("");

  let addnewtask = () => {
    settodo((prevtodos) => {
      return [...prevtodos, { task: newtodo, id: uuidv4(),}];
    });
    setnewTodo("");
  };

  let updatetodo = (event) => {
    setnewTodo(event.target.value);
  };

  let handledelete = (id) => {
    settodo((prevtodo) => todos.filter((prevtodo) => prevtodo.id != id));
  };

  let uppercaseall = () => {
    settodo((prevtodo) =>
      prevtodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let uppercaseone = (id) => {
    settodo((prevtodo) =>
      prevtodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let checked = (id) => {
    settodo((prevtodo) =>
      prevtodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isdone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <h2>Todo list</h2>
      <div className="container">
        <input
          type="text"
          placeholder="Write a task..."
          value={newtodo}
          onChange={updatetodo}
        />
        <br />
        <br />
        <br />
        <button onClick={addnewtask}>Submit</button>
        <br /> <br />
        <h4>Tasks</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={todo.isdone ? { textDecorationLine: "line-through" } : {}}
              >
                {todo.task}
              </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => handledelete(todo.id)}>X</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => uppercaseone(todo.id)}>
                Uppercase one
              </button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() =>checked(todo.id)}>checked</button>
            </li>
          ))}
        </ul>
        <br /> <br />
        <button onClick={uppercaseall}>Uppercase All</button>
      </div>
    </>
  );
}

export default Todo;
