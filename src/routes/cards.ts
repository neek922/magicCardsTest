import { Router } from 'express';
import cardsController from "../controllers/cards";

const router = Router();

router.post('/cards', cardsController.getCards);

export default router;