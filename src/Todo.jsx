import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import '/src/Todo.css'

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
    settodo(() => todos.filter((prevtodo) => prevtodo.id != id));
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
     <div className="main">
     <h2>Todo list</h2>
      <div className="container">
        <div className="input">
        <input
          type="text"
          placeholder="Write a task..."
          value={newtodo}
          onChange={updatetodo}
        />
        
        <button onClick={addnewtask}>Submit</button>
        </div>
       
        <h4>Tasks</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className="task">
              <span
                style={todo.isdone ? { textDecorationLine: "line-through" } : {}}>
                {todo.task}
              </span>
              </div>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => handledelete(todo.id)} className="close">X</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => uppercaseone(todo.id)} className="upper">
                Uppercase one
              </button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() =>checked(todo.id)} className="checked">checked</button>
            </li>
          ))}
        </ul>
        <button onClick={uppercaseall}>Uppercase All</button>
      </div>
     </div>
    </>
  );
}

export default Todo;
