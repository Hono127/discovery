"use client";

import React, { useState } from "react";
import { Task } from "../pages/types";
import { deleteTodo, editTodo } from "../pages/api";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editingTodo, setEditingTodo] = useState(todo.text);

  const handleEdit = async () => {
    setIsEdit(true);
  };

  const handleSave = async () => {
    await editTodo(todo.id, editingTodo);
    setIsEdit(false);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded-md"
    >
      {isEdit ? (
        <input
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editingTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditingTodo(e.target.value)
          }
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {isEdit ? (
          <button className="text-green-500 mr-3" onClick={handleSave}>
            保存
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            編集
          </button>
        )}
        <button className="text-red-500" onClick={handleDelete}>
          消去
        </button>
      </div>
    </li>
  );
};

export default Todo;
