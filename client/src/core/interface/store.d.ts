import {ICard} from './card';
import {DirType, SortType} from './sort';

interface ICardsState {
	cards: ICard[];
	loading: boolean;
	searchString: string;
	currentPage: number,
	sort: SortType,
	dir: DirType,
	totalCards: number;
	isNotFound: boolean;
	error: string;
}

interface IFetchCardsParams {
	searchString: string,
	pageNumber: number,
	sortType: string,
	dirType: string
}
