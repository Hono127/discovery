import React from 'react'

const CompleteTodo = (props) => {
  const { completeTodos, onClick, onClickDelete } = props;
  return (
    <div className="completeTodoArea">
      <h3 className="completeTodoArea_ttl">完了のタスク一覧</h3>
      <ul className="completeTodoArea__list">
        {completeTodos.map((todo, i) => {
          return (
            <li className="completeTodoArea__listItem" key={todo}>
              <p className="completeTodoArea__todoName">{todo}</p>
              <button
                className="completeTodoArea__backBtn"
                onClick={() => onClick(i)}
              >
                戻す
              </button>
              <button
                className="completeTodoArea__deleteBtn"
                onClick={() => onClickDelete(i)}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default CompleteTodo