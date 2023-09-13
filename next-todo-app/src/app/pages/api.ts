import { Task } from "./types";

// todoの取得機能
// apiのfetchは必ずaysnc関数忘れずに
export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/todos`, { cache: "no-store" }); // SSR
  const todos = res.json();
  return todos;
};
// todoの追加機能
export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/todos`, {
    method: "POST", //追加(POST)作業のためmethod: "POST"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodos = res.json();
  return newTodos;
};

// todoの編集機能
export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updateTodos = res.json();
  return updateTodos;
};

// todoの削除機能
export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodos = res.json();
  return deleteTodos;
};
