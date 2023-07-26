import React from 'react'

const InCompleteTodo = (props) => {
	const { inCompleteTodos, onClick, onClickDelete } = props
	return (
		<div className="inCompleteTodoArea">
			<h3 className="inCompleteTodoArea__ttl">未完了のタスク一覧</h3>
			<ul className="inCompleteTodoArea__list">
				{inCompleteTodos.map((todo, i) => {
					return (
						<li className="inCompleteTodoArea__listItem" key={todo}>
							<p className="inCompleteTodoArea__todoName">{todo}</p>
							<button
								className="inCompleteTodoArea__completeBtn"
								onClick={() => onClick(i)}
							>
								完了
							</button>
							<button
								className="inCompleteTodoArea__deleteBtn"
								onClick={() => onClickDelete()}
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

export default InCompleteTodo