import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import router from './app/router';
import notFoundRoute from './app/middlewares/notFoundRoute';

const app: Application = express();

app.use(cors());
app.use(express.json()); //json parser

//application route
app.use('/api', router);

//testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//not found route
app.use(notFoundRoute);

export default app;
