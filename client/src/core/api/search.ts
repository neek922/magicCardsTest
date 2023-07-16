import axios, { AxiosResponse } from 'axios';
import { SERVER_URI } from '../../config';
import {ICardResponseData} from '../interface/card';

export function searchCards(searchString: string, pageNumber: number = 1, sortType: string = 'name', dirType: string = 'auto'): Promise<AxiosResponse> {
	return axios.post<ICardResponseData>(`${SERVER_URI}/cards`, { q: `q=${searchString}&page=${pageNumber}&dir=${dirType}&order=${sortType}` })
		.catch((error) => {
			console.log('searchCards error:', error);
			throw error;
		});
}