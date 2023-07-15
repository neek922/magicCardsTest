import type { Request, Response } from 'express';
import axios from 'axios';
import { get } from 'lodash';

class CardsService {
	async getCards(req: Request, res: Response): Promise<void> {
		const query = get(req, 'body.q', '');
		if (query) {
			try {
				// @ts-ignore
				const data = await axios.get(`${process.env.SCRYFALL}?${query}`);
				res.json(data.data);
			} catch (error) {
				res.json({isNotFound: true});
			}
		} else {
			res.json({isError: true});
		}

	}
}

const cardsService = new CardsService();

export default cardsService;