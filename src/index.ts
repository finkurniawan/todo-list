// import 'module-alias/register';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
// import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { config as dotenv } from 'dotenv';

import AuthRoutes from './api/v1/routes/auth/AuthRoute';
import TodoRoutes from './api/v1/routes/todos/TodoRoutes';
import CategoryRoutes from './api/v1/routes/category/CategoryRoute';

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
    this.APP.use('/api/v1/todos', TodoRoutes);
    this.APP.use('/api/v1/categories', CategoryRoutes);
    this.APP.use('*', (req: Request, res: Response) =>
      res.status(404).json({
        status: false,
        data: null,
        message: 'Page not found',
        errors: [],
      })
    );
  }
}

const port: number = process.env.PORT || 8000;
const { APP } = new App();
APP.listen(port, () => {
  console.log(`Running At : http://localhost:${port}`);
  console.log(process.env.DB_HOST);
});
