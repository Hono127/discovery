"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { addTodo } from "../pages/api";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const [taskTitle, setTaskTitle] = useState("");
  // 「e: FormEvent」でhandleSubmitされるたびページの更新が走るのを防ぐ
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodo({ id: uuidv4(), text: taskTitle });
    setTaskTitle("");
  };
  return (
    <form className="mb-4  space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
      />
      <button
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md transform hover:bg-blue-400 hover:scale-95 duration-200"
        disabled={!taskTitle}
      >
        追加
      </button>
    </form>
  );
};

export default AddTodo;
