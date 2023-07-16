import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cardReducer from './reducers/cards/CardSlice'

const rootReducer = combineReducers({
	cardReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
