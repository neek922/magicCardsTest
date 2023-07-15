import { Router } from 'express';
import cardsService from '../services/cards';

const router = Router();

router.post('/cards', cardsService.getCards);

export default router;