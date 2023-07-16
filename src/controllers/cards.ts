import type { Request, Response } from 'express';
import cardsService from "../services/cards";

class CardsController {
    async getCards(req: Request, res: Response): Promise<void> {
        try {
            const data = await cardsService.getCards(req);
            res.json(data);
        } catch (e) {
            res.json({isNotFound: true});
        }
    }
}

const cardsController = new CardsController();

export default cardsController;