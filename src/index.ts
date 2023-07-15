import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import onError from './utils/onError';
import apiCards from './routes/cards';

const app = express();
const port = 3001;
dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('Good luck!');
});

app.use('/api', apiCards)
app.use('*', (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Page not found' })
})
app.use(onError)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}.`);
});
