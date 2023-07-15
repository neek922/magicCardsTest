import React from 'react';
import PaginationJS from 'react-js-pagination';
import { LIMIT_CARDS_ON_PAGE } from '../../core/constants/constatns';

interface PaginationProps {
	changePage: (pageNumber: number) => void;
	totalCards: number;
	activePage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalCards, changePage, activePage }) => {
	const handlePageClick = async (pageNumber: number) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		changePage(pageNumber + 1);
	};

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
