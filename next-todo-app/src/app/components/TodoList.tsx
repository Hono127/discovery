import React from "react";

const TodoList = () => {
  return (
    <ul className="space-y-3">
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded-md">
        <span>sんぽ</span>
        <div>
          <button className="text-green-500 mr-3">編集</button>
          <button className="text-red-500">消去</button>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
