import React from 'react';
import SearchInput from '../UI/SearchInput';
import SortInput from '../UI/SortInput';
import { SORT_DIR, SORT_TYPES } from '../../core/constants/constatns';
import {useAppDispatch, useAppSelector} from '../../core/hooks/redux';
import {cardSlice} from '../../store/reducers/cards/CardSlice';
import {DirType, SortType} from '../../core/interface/sort';

const SearchBar: React.FC = () => {
	const {sort, dir } = useAppSelector(state => state.cardReducer);
	const {setSortType, setDirType} = cardSlice.actions;
	const dispatch = useAppDispatch();

	const handleChangeType = (type: string) => {
		dispatch(setSortType(type as SortType));
	}

	const handleChangeDir = (type: string) => {
		dispatch(setDirType(type as DirType));
	}

	return (
		<div className='flex justify-center mb-4 gap-1'>
			<SearchInput />
			<SortInput onSort={handleChangeType} title={sort} sortOptions={SORT_TYPES} />
			<SortInput onSort={handleChangeDir} title={dir} sortOptions={SORT_DIR} />
		</div>
	);
};

export default SearchBar;
