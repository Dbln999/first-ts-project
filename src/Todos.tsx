import React, { useState } from "react";
import { Itodo } from "./interfaces";

type todosProps = {
  todo: Itodo;
  removeTodo(id: number): void;
  id: number;
  checkBoxHandler(id: number): void;
  editTodo(id: number, title: string): void;
};

export const Todos: React.FC<todosProps> = ({ todo, ...props }) => {
  const [checkBoxState, setCheckBoxState] = useState<boolean>(false);
  const className: string = "todoTitle " + (todo.completed ? "completed" : "");

  const [todoTitle, setTodoTitle] = useState(todo.title);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const [disable, setDisable] = useState(true);

  return (
    <div className="todoContainer">
      <p className="trash" onClick={() => props.removeTodo(todo.id)}>
        🗑️
      </p>
      <input
        type="text"
        className={className}
        value={todoTitle}
        onChange={changeHandler}
        disabled={disable}
      ></input>
      <p className="pencil" onClick={() => {props.editTodo(todo.id, todoTitle); setDisable(!disable)}}>&#9999;&#65039;</p>
      <input
        type="checkbox"
        name="todoCompleted"
        className="checkBox"
        id=""
        onChange={() => {
          props.checkBoxHandler(props.id);
          setCheckBoxState(!checkBoxState);
        }}
        checked={checkBoxState}
      />
    </div>
  );
};
