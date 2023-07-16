import React from 'react';
import PaginationJS from 'react-js-pagination';
import { LIMIT_CARDS_ON_PAGE } from '../../core/constants/constatns';
import {cardSlice} from '../../store/reducers/cards/CardSlice';
import {useAppDispatch} from '../../core/hooks/redux';

type PaginationProps = {
	totalCards: number,
	activePage: number
};

const Pagination: React.FC<PaginationProps> = ({totalCards, activePage}) => {
	const { setCurrentPage } = cardSlice.actions;
	const dispatch = useAppDispatch()

	const handlePageClick = (number: number) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		dispatch(setCurrentPage(number));
	}

	const itemClass = 'inline-block mr-2 text-gray-700 px-3 py-1 rounded';

	return (
		<div>
			<PaginationJS
				activePage={activePage}
				totalItemsCount={totalCards}
				itemsCountPerPage={LIMIT_CARDS_ON_PAGE}
				pageRangeDisplayed={5}
				onChange={handlePageClick}
				innerClass='flex items-center justify-center m-8'
				activeClass='bg-blue-500 text-white'
				itemClass={itemClass}
			/>
		</div>
	);
};

export default Pagination;
