import React, { ChangeEvent, useState } from 'react';
import { debounce } from 'lodash';
import {useAppDispatch} from '../../core/hooks/redux';
import {cardSlice} from '../../store/reducers/cards/CardSlice';

const SearchInput: React.FC = () => {
	const {setSearchString} = cardSlice.actions;
	const dispatch = useAppDispatch();
	const [isFocused, setIsFocused] = useState<boolean>(false);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		debouncedSearch(event.target.value.trim());
	};

	const debouncedSearch = debounce((value: string) => {
		dispatch(setSearchString(value));
	}, 1000);

	return (
		<div className='flex justify-center mb-4'>
			<div className='relative'>
				<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
					<svg className='w-5 h-5 text-orange-500' fill='none' stroke='currentColor'
						 viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
							  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
					</svg>
				</div>
				<input type='search'
					   className={`block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:outline-none ${
						   isFocused ? 'border-2 border-orange-500 ' : 'border'}`}
					   placeholder='Search...'
					   maxLength={99}
					   onChange={handleInputChange}
					   onFocus={() => setIsFocused(true)}
					   onBlur={() => setIsFocused(false)} />
			</div>
		</div>
	);
};

export default SearchInput;
