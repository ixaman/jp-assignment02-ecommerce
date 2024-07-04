import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json()); //json parser

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
