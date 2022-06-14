import { SyntheticEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { addToDo } from '../../store/slices/todo-slice';
import './todo-form.scss';

export default function TodoForm() {

	const inputText = useRef<HTMLInputElement>(null)

	const dispatch = useAppDispatch()

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		const text = inputText.current
		if (text) {
			dispatch(addToDo({
				id: Date.now(),
				data: text.value,
				isDone: false
			}))
			text.value = '';
		}
	}

	const downSVG = <svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		stroke="#ccc"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-chevron-down"
	>
		<polyline points="6 9 12 15 18 9"></polyline>
	</svg>

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<div className="icon">
				{downSVG}
			</div>
			<input ref={inputText} type="text" placeholder='What needs to be done?' required/>
		</form>
	)
}