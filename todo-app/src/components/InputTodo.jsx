import React from 'react'

const InputTodo = (props) => {
	const { inputText, onChange, onClick } = props;
	return (
		<div className="inputTodoArea">
			<h3>タスク入力欄</h3>
			<input
				type="text"
				value={inputText}
				placeholder="タスクを入力"
				onChange={onChange}
			/>
			<button onClick={() => onClick()} disabled={!inputText}>
				追加
			</button>
		</div>
	)
}

export default InputTodo