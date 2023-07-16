import React, {useEffect} from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Header from '../components/simple/Header';
import Greetings from '../components/simple/Greetings';
import Card from '../components/smart/Card';
import Pagination from '../components/smart/Pagination';
import SearchBar from '../components/smart/SearchBar';
import Banner from '../components/simple/Banner';
import {useAppDispatch, useAppSelector} from '../core/hooks/redux';
import {fetchCards} from '../store/reducers/cards/ActionCreator';
import {cardSlice} from '../store/reducers/cards/CardSlice';

const MainPage: React.FC = () => {
	const { cards, loading, totalCards, isNotFound, currentPage, searchString, sort, dir, error} = useAppSelector(state => state.cardReducer);
	const {clearState} = cardSlice.actions;
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (searchString) {
			dispatch(fetchCards());
		} else {
			dispatch(clearState());
		}
	}, [currentPage, searchString, sort, dir]);

	return (
		<div className='bg-white'>
			<Header />
			<Greetings />
			<SearchBar />
			<div className='flex flex-wrap justify-center gap-4 mx-16'>
				{!loading && cards.map((card) => <Card card={card} key={card.id} />)}
				{loading && (
					<PacmanLoader
						className='mt-16'
						color='#ff8707'
						loading={loading}
						size={50}
						aria-label='Loading Spinner'
						data-testid='loader'
					/>
				)}
			</div>
			{isNotFound && <Banner text={'Not Found...'}/>}
			{error && <Banner text={error}/>}
			{!loading && totalCards > 1 && cards.length > 0 && (
				<Pagination totalCards={totalCards} activePage={currentPage}/>
			)}
		</div>
	);
};

export default MainPage;