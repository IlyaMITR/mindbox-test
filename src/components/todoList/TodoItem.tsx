import { ID } from "../../types/todos"
import image from '../../images/check.svg'
import { useAppDispatch } from "../../hooks/redux";
import { changeToDoDone } from "../../store/slices/todo-slice";

interface TodoItemParams {
	id: ID;
	data: string;
	isDone: boolean;
}

export default function TodoItem({ id, data, isDone }: TodoItemParams) {
	
	const dispatch = useAppDispatch()

	const onCheck = () => {
		dispatch(changeToDoDone({ id, isDone: !isDone}))
	}

	return (
		<div className="todo-list__item">
			<label className="done-flag">
				<input type='checkbox' checked={isDone} onChange={onCheck}/>
				<div><img src={image} alt="" /></div>
			</label>
			<div className="data" aria-checked={isDone}>{ data }</div>
		</div>
	)
}