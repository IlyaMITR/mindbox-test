export type ID = number;

export enum FilterMode{
	'all',
	'active',
	'completed'
}

export interface IState{
	count: number;
	filter: FilterMode;
	todos: ITodo[];
}

export interface ITodo {
	id: ID;
	isDone: boolean;
	data: string
}