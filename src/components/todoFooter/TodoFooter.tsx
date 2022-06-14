import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { clearComletedToDos, setToDoFilterMode } from "../../store/slices/todo-slice";
import { FilterMode } from "../../types/todos";
import './todo-footer.scss';

export default function TodoFooter() {

	const filterMode = useAppSelector(state => state.data.filter)
	const counter = useAppSelector(state => state.data.count)
	const dispatch = useAppDispatch()

	const setFilterMode = (mode: FilterMode) => {
		dispatch(setToDoFilterMode(mode))
	}

	const isFilterMode = (mode: FilterMode) => {
		return filterMode === mode;
	}

	const onClear = () => {
		dispatch(clearComletedToDos())
	}

	return (
		<footer>
			<div className="todo-footer">
				<div className="todo-footer__counter">{	counter } items left</div>
				<div className="todo-footer__selectors">
					{/* awdwad */}
					<button className={`selector ${isFilterMode(FilterMode.all) ? 'checked' : null}`}
						onClick={() => setFilterMode(FilterMode.all)}
					>
						All
					</button>
					<button className={`selector ${isFilterMode(FilterMode.active) ? 'checked' : null}`}
						onClick={() => setFilterMode(FilterMode.active)}
					>
						
						Active
					</button>
					<button className={`selector ${isFilterMode(FilterMode.completed) ? 'checked' : null}`}
						onClick={() => setFilterMode(FilterMode.completed)}
					>
						Completed
					</button>
				</div>
				<div className="todo-footer__clear-completed">
					<button className="clear" onClick={onClear}>Clear completed</button>
				</div>
			</div>
			<div className="todo-footer-decor">
				<div className="upper"></div>
				<div className="lower"></div>
			</div>
		</footer>
		
	)
}