import axios, { AxiosResponse } from 'axios';
import { searchCards } from '../src/core/api/search';
import { SERVER_URI } from '../src/config';

jest.mock('axios');

describe('searchCards', () => {
	const searchString = 'test';
	const pageNumber = 1;
	const sortType = 'name';
	const dirType = 'auto';

	test('should send a POST request with the correct parameters', async () => {
		const expectedUrl = `${SERVER_URI}/cards`;
		const expectedRequestBody = { q: `q=${searchString}&page=${pageNumber}&dir=${dirType}&order=${sortType}` };

		const mockResponse: AxiosResponse = {
			data: {},
			status: 200,
			statusText: 'OK',
			headers: {},
			// @ts-ignore
			config: {},
		};

		(axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce(mockResponse);

		await searchCards(searchString, pageNumber, sortType, dirType);

		expect(axios.post).toHaveBeenCalledWith(expectedUrl, expectedRequestBody);
	});

	test('should throw an error if the request fails', async () => {
		const errorMessage = 'Request failed';

		(axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce(new Error(errorMessage));

		await expect(searchCards(searchString, pageNumber, sortType, dirType)).rejects.toThrowError(errorMessage);
	});
});