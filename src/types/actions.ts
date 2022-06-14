import { ITodo, ID, FilterMode } from "./todos";

interface IAction{
	type: string;
}

export interface IAddToDoAction extends IAction{
	payload: ITodo;
}

export interface IDeleteToDoAction extends IAction{
	payload: ID;
}

export interface IsetToDoFilterModeAction extends IAction{
	payload: FilterMode;
}

export interface IchangeToDoDoneAction extends IAction{
	payload: {
		id: ID;
		isDone: boolean;
	};
}

