import React from 'react';
import SearchInput from '../UI/SearchInput';
import SortInput from '../UI/SortInput';
import { SORT_DIR, SORT_TYPES } from '../../core/constants/constatns';


type SearchBarProps = {
	onSearch: (value: string) => void;
	onSort: (value: string) => void;
	sortType: string;
	dirType: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSort, sortType, dirType }) => {

	return (
		<div className='flex justify-center mb-4 gap-1'>
			<SearchInput onSearch={onSearch} />
			<SortInput onSort={onSort} title={sortType} sortOptions={SORT_TYPES} />
			<SortInput onSort={onSort} title={dirType} sortOptions={SORT_DIR} />
		</div>
	);
};

export default SearchBar;
