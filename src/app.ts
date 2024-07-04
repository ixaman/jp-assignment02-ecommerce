import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import router from './app/router';

const app: Application = express();

app.use(cors());
app.use(express.json()); //json parser

//application route
app.use('/api/v1', router);

//testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
