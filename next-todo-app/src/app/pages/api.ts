import { Todo } from "./types";

// apiのfetchは必ずaysnc関数忘れずに
export const getAllTodos = async (): Promise<Todo[]> => {
  const res = await fetch(`http://localhost:3001/todos`, { cache: "no-store" }); // SSR
  const todos = res.json();
  return todos;
};
