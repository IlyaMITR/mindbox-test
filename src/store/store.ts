import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slices/todo-slice";


const rootReducer = combineReducers({
	data: toDoSlice
})

export const store = () => 
{
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']