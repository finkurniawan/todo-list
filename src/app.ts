import { config as dotenv } from 'dotenv';
import express, { Application, Response } from 'express';
import bodyParser from 'body-parser';
// import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import AuthRoutes from './api/v1/routes/auth/AuthRoute';
import TodoRoutes from './api/v1/routes/todos/TodoRoutes';
import CategoryRoutes from './api/v1/routes/category/CategoryRoute';
import HomeRoutes from './api/v1/routes/home/HomeRoutes';

class App {
  public APP: Application;

  constructor() {
    this.APP = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.APP.use(bodyParser.json());
    // this.APP.use(morgan('dev'));
    this.APP.use(compression());
    this.APP.use(helmet());
    this.APP.use(cors());
  }

  protected routes(): void {
    this.APP.use('/api/v1/accounts', AuthRoutes);
    this.APP.use('/api/v1/home', HomeRoutes);
    this.APP.use('/api/v1/todos', TodoRoutes);
    this.APP.use('/api/v1/categories', CategoryRoutes);

    this.APP.use('*', (_, res: Response) =>
      res.status(404).json({
        status: false,
        message: 'Page not found',
        errors: [],
        data: null,
      })
    );
  }
}

export default App;
