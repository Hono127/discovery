import { Task } from "./types";

// apiのfetchは必ずaysnc関数忘れずに
export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/todos`, { cache: "no-store" }); // SSR
  const todos = res.json();
  return todos;
};
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
