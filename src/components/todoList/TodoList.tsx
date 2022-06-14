import { useAppSelector } from '../../hooks/redux';
import { FilterMode } from '../../types/todos';
import './todo-list.scss';
import TodoItem from './TodoItem';

export default function TodoList() {

	const todos = useAppSelector(state => state.data.todos)
	const filterMode = useAppSelector(state => state.data.filter)

	if (filterMode === FilterMode.active) {
		return (
			<div className="todo-list" >
				{
					todos.filter(a => a.isDone === false).map(todo => <TodoItem key={todo.id} {...todo} />)
				}
			</div>
		)
	} else if (filterMode === FilterMode.completed) {
		return (
			<div className="todo-list">
				{
					todos.filter(a => a.isDone === true).map(todo => <TodoItem key={todo.id} {...todo} />)
				}
			</div>
		)
	} else {
		return (
			<div className="todo-list">
				{
					todos.map(todo => <TodoItem key={todo.id} {...todo} />)
				}
			</div>
		)
	}

}