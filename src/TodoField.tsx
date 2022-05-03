import React, { useState } from "react";
import { Itodo } from "./interfaces";
import { Todos } from "./Todos";

type todoListProps = {
  todos: Itodo[];
  addBtnHandler(title: string): void;
  removeTodo(id: number): void;
  checkBoxHandler(id: number): void;
  editTodo(id: number, title: string): void;
};

export const TodoField: React.FC<todoListProps> = ({ todos, ...props }) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="mainContainer">
      <div className="additionContainer">
        <input
          type="text"
          value={title}
          name="todoField"
          id=""
          onChange={changeHandler}
        />
        <button
          onClick={() => {
            props.addBtnHandler(title);
            setTitle("");
          }}
        >
          ADD TODO
        </button>
      </div>

      <div>
        {todos.map((todo) => {
          return (
            <Todos
              key={todo.id}
              id={todo.id}
              removeTodo={props.removeTodo}
              checkBoxHandler={props.checkBoxHandler}
              editTodo={props.editTodo}
              todo={todo}
            />
          );
        })}
      </div>
    </div>
  );
};
