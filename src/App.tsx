import React, { useEffect, useState } from "react";
import "./index.css";
import "./TodoField";
import { TodoField } from "./TodoField";
import { Itodo } from "./interfaces";
import set = Reflect.set;

function App() {
  const [todos, setTodos] = useState<Itodo[]>([]);
  const addBtnHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((perv) => [newTodo, ...perv]);
  };

  const removeTodo = (id: number) => {
    setTodos((perv) => perv.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, title: string) => {
    todos.map((todo) => {
      if (id === todo.id) {
        todo.title = title;
      }
    });
    console.log(todos)

  };


  const checkBoxHandler = (id: number) => {
    todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
    });
  };

  return (
    <div className="App">
      <TodoField
        checkBoxHandler={checkBoxHandler}
        todos={todos}
        addBtnHandler={addBtnHandler}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
