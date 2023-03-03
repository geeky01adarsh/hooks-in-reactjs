import React, { useState } from "react";

const Todo = () => {
  const initialTodos = [
    { id: 1, name: "Eat", done: false },
    { id: 2, name: "Sleep", done: false },
    { id: 3, name: "Code", done: false },
    { id: 4, name: "Repeat", done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  let nextId = 5;
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo) return;
    const next_todo = {
      id: nextId,
      name: newTodo,
      done: false,
    };
    setTodos([...todos, next_todo]);
    setNewTodo("");
    nextId = nextId + 1;
  };

  return (
    <>
      <div>These are my todos</div>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <input
                type="checkbox"
                name=""
                id={todo.id}
                value={todo.done}
                onChange={() => {
                  todo.done = !todo.done;
                }}
              />
              <span>{todo.name}</span>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
};

export default Todo;
