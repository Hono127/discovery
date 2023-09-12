import React from "react";
import { Task } from "../pages/types";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded-md"
    >
      <span>{todo.text}</span>
      <div>
        <button className="text-green-500 mr-3">編集</button>
        <button className="text-red-500">消去</button>
      </div>
    </li>
  );
};

export default Todo;
