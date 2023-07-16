import {createAsyncThunk} from '@reduxjs/toolkit';
import {searchCards} from '../../../core/api/search';
import {RootState} from '../../store';


export const fetchCards = createAsyncThunk(
	'card/fetchCards',
	async (_, thunkAPI) => {
		const state  = thunkAPI.getState() as RootState;
		const {searchString, currentPage, sort, dir } = state.cardReducer;
		try {
			const response = await searchCards(searchString, currentPage, sort, dir);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Failed to load cards...')
		}
	}
)
