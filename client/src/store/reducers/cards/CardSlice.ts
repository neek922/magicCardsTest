import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICardResponseData} from '../../../core/interface/card';
import {fetchCards} from './ActionCreator';
import {DirType, SortType} from '../../../core/interface/sort';
import {ICardsState} from '../../../core/interface/store';

const initialState: ICardsState = {
	cards: [],
	totalCards: 0,
	isNotFound: false,
	error: '',
	loading: false,
	searchString: '',
	currentPage: 1,
	sort: 'name',
	dir: 'auto'
};

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		clearState(state) {
			state.cards = [];
			state.currentPage = 1;
		},
		setSearchString(state, action: PayloadAction<string>) {
			state.searchString = action.payload;
		},
		setSortType(state, action: PayloadAction<SortType>) {
			state.sort = action.payload;
		},
		setDirType(state, action: PayloadAction<DirType>) {
			state.dir = action.payload;
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		}
	},
	// extraReducers: {
	// 	[fetchCards.pending.type]: (state) => {
	// 		state.loading = true;
	// 		state.cards = [];
	// 		state.totalCards = 0;
	// 		state.isNotFound = false;
	// 	},
	// 	[fetchCards.fulfilled.type]: (state, action: PayloadAction<ICardResponseData>) => {
	// 		state.loading = false;
	// 		state.error = '';
	// 		if (action.payload.isNotFound) {
	// 			state.isNotFound = true;
	// 		} else {
	// 			state.cards = action.payload.data;
	// 			state.totalCards = action.payload.total_cards;
	// 		}
	// 	},
	// 	[fetchCards.rejected.type]: (state, action: PayloadAction<string>) => {
	// 		state.loading = false;
	// 		state.error = action.payload;
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(fetchCards.pending, (state) => {
				state.loading = true;
				state.cards = [];
				state.totalCards = 0;
				state.isNotFound = false;
			})
			.addCase(fetchCards.fulfilled, (state, action: PayloadAction<ICardResponseData>) => {
				state.loading = false;
				state.error = '';
				if (action.payload.isNotFound) {
					state.isNotFound = true;
				} else {
					state.cards = action.payload.data;
					state.totalCards = action.payload.total_cards;
				}
			})
			.addCase(fetchCards.rejected, (state, action) => {
				state.loading = false;
				// @ts-ignore
				state.error = action.payload;
			});
	}
});

export default cardSlice.reducer;