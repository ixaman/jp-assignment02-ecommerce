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

//default route
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome To Assignment-02 Ecommerce backend API',
  });
});

//not found route
app.use(notFoundRoute);

export default app;
