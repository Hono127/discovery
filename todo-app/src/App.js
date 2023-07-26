import { useState } from "react";
import "./App.scss";
import InputTodo from "./components/InputTodo";
import InCompleteTodo from "./components/InCompleteTodo";
import CompleteTodo from "./components/CompleteTodo";

function App() {
  const [inputText, setInputText] = useState("");
  // 未完了タスクのstate管理
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  // 完了タスクのstate管理
  const [completeTodos, setCompleteTodos] = useState([]);

  // 完了ボタンを押したら完了タスクに移動
  const moveCompleteTodos = (i) => {
    const newCompleteTodos = [...completeTodos, inCompleteTodos[i]];
    const deleteInComolete = [...inCompleteTodos];
    deleteInComolete.splice(i, 1);
    setInCompleteTodos(deleteInComolete);
    setCompleteTodos(newCompleteTodos);
  };
  const deleteFromInComplete = (i) => {
    const deleteTarget = [...inCompleteTodos];
    deleteTarget.splice(i, 1);
    setInCompleteTodos(deleteTarget);
  };
  const deleteFromComplete = (i) => {
    // alert(i);
    // alert(`削除されるのは${i}番目です`);
    const deleteTarget = [...completeTodos];
    deleteTarget.splice(i, 1);
    setCompleteTodos(deleteTarget);
  };

  const enteredText = (e) => setInputText(e.target.value);

  const addTodo = () => {
    // alert(inputText);
    const newInCompleteTodos = [...inCompleteTodos, inputText];
    setInCompleteTodos(newInCompleteTodos);
    setInputText("");
  };

  const backTodo = (i) => {
    const backTodos = [...inCompleteTodos, completeTodos[i]];
    setInCompleteTodos(backTodos);
    const deleteTodos = [...completeTodos];
    deleteTodos.splice(i, 1);
    setCompleteTodos(deleteTodos);
  };

  return (
    <div className="App">
      {/* タスク入力欄 */}
      <InputTodo
        onChange={enteredText}
        onClick={addTodo}
        inputText={inputText}
      />
      <main className="todoArea">
        {/* 未完了タスク一覧 */}
        <InCompleteTodo
          onClick={moveCompleteTodos}
          onClickDelete={deleteFromInComplete}
          inCompleteTodos={inCompleteTodos}
        />
        {/* 完了タスク一覧 */}
        <CompleteTodo
          onClick={backTodo}
          onClickDelete={deleteFromComplete}
          completeTodos={completeTodos}
        />
      </main>
    </div>
  );
}

export default App;
