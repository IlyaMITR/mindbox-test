import { createSlice } from "@reduxjs/toolkit";
import { FilterMode, ID, IState } from "../../types/todos";
import { IAddToDoAction, IchangeToDoDoneAction, IDeleteToDoAction, IsetToDoFilterModeAction } from "../../types/actions";

const initObj: IState = {
	count: 2,
	filter: FilterMode.all,
	todos: [
		{
			id: 1,
			data: 'Тестовое задание',
			isDone: false
		},
		{
			id: 2,
			data: 'Прекрасный код',
			isDone: true
		},
		{
			id: 3,
			data: 'Покрытие тестами',
			isDone: false
		},
	]
}

// const saveDataInLS = (state: IState) => {
// 	localStorage.setItem('state', JSON.stringify(state))
// }

// const initState: IState = localStorage.getItem('state') === null ? { ...initObj } : JSON.parse(localStorage.getItem('state')!)

const findToDoIndex = (state: IState, id: ID) => {
	return state.todos.findIndex(a => a.id === id)
}

const toDoSlice = createSlice({
	name: 'cats',
	initialState: initObj,
	reducers: {
		addToDo(state, action: IAddToDoAction) {
			state.todos.unshift(action.payload);
			state.count++;
		},
		setToDoFilterMode(state, action: IsetToDoFilterModeAction) {
			state.filter = action.payload;
			// state.count++;
		},
		deleteToDo(state, action: IDeleteToDoAction) {
			state.todos.splice(findToDoIndex(state, action.payload), 1);
			state.count--;
		},
		clearComletedToDos(state) {
			state.todos = state.todos.filter(a => a.isDone === false);
		},
		changeToDoDone(state, action: IchangeToDoDoneAction) {
			state.todos[findToDoIndex(state, action.payload.id)].isDone = action.payload.isDone;
			if (action.payload.isDone === false) {
				state.count++
			} else {
				state.count--
			}
		}
	}
})

export default toDoSlice.reducer;
export const { addToDo, deleteToDo, changeToDoDone, setToDoFilterMode, clearComletedToDos } = toDoSlice.actions;