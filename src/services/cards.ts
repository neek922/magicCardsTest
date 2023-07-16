import type { Request } from 'express';
import axios from 'axios';
import { get } from 'lodash';

class CardsService {
	async getCards(req: Request): Promise<object> {
		const query = get(req, 'body.q', '');
		if (query) {
				// @ts-ignore
				return await axios.get(`${process.env.SCRYFALL}?${query}`);
		} else {
			return {isError: true};
		}
	}
}

const cardsService = new CardsService();

export default cardsService;