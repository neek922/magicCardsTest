import React, { useState } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Header from '../components/simple/Header';
import Greetings from '../components/simple/Greetings';
import { searchCards } from '../core/api/search';
import { ICard } from '../core/interface/card';
import Card from '../components/smart/Card';
import Pagination from '../components/smart/Pagination';
import SearchBar from '../components/smart/SearchBar';
import Banner from '../components/simple/Banner';

const MainPage: React.FC = () => {
	const [cards, setCards] = useState<ICard[]>([] as ICard[]);
	const [searchString, setSearchString] = useState<string>('');
	const [totalCards, setTotalCards] = useState<number>(0);
	const [activePage, setActivePage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [sortType, setSortType] = useState<string>('name');
	const [dirType, setDirType] = useState<string>('auto');
	const [isNotFound, setIsNotFound] = useState<boolean>(false);


	const onSearch = async (searchString: string, pageNumber: number = 1, sort: string = sortType, dir: string = dirType) => {
		setCards([]);
		setLoading(true);
		setIsNotFound(false);
		setSearchString('');
		if (searchString) {
			await searchCards(searchString, pageNumber, sort, dir)
				.then((resp) => {
					if (resp && resp.status === 200 && resp.data) {
						setSearchString(searchString);
						setCards(resp.data?.data || []);
						setTotalCards(resp.data?.total_cards || 0);
						if (resp.data?.isNotFound) {
							setIsNotFound(true);
						}
					}
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			setCards([]);
			setTotalCards(0);
		}
		setLoading(false);
	};

	const changePage = async (pageNumber: number): Promise<void> => {
		setActivePage(pageNumber);
		await onSearch(searchString, pageNumber);
	};

	const sortCards = async (value: string): Promise<void> => {
		const type = ['auto', 'asc', 'desc'].includes(value) ? 'dir' : 'sort';
		if (type === 'dir') {
			if (value === dirType) return;
			setDirType(value);
		} else {
			if (value === sortType) return;
			setSortType(value);
		}
		setActivePage(1);
		await onSearch(searchString, 1, type === 'sort' ? value : sortType, type === 'dir' ? value : dirType);
	};

	return (
		<div className='bg-white'>
			<Header />
			<Greetings />
			<SearchBar onSearch={onSearch} onSort={sortCards} sortType={sortType} dirType={dirType} />
			<div className='flex flex-wrap justify-center gap-4 mx-16'>
				{!loading && cards.map((card) => (
					<Card card={card} key={card.id} />
				))}
				<PacmanLoader
					className='mt-16'
					color='#ff8707'
					loading={loading}
					size={50}
					aria-label='Loading Spinner'
					data-testid='loader'
				/>
			</div>
			{isNotFound && <Banner />}
			{!loading && totalCards > 1 && cards.length &&
				<Pagination totalCards={totalCards} changePage={changePage} activePage={activePage} />
			}
		</div>
	);
};

export default MainPage;
