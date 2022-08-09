// import 'module-alias/register';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { config as dotenv } from 'dotenv';

import UserRoutes from './api/routes/user/UserRoute';
import AuthRoutes from './api/routes/auth/AuthRoute';
import TodoRoutes from './api/routes/Todos/TodoRoutes';

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
    this.APP.use(morgan('dev'));
    this.APP.use(compression());
    this.APP.use(helmet());
    this.APP.use(cors());
  }

  protected routes(): void {
    this.APP.use('/users', UserRoutes);
    this.APP.use('/auth', AuthRoutes);
    this.APP.use('/todos', TodoRoutes);
  }
}

const port: number = 8000;
const APP = new App().APP;
APP.listen(port, () => {
  console.log('Running At : http://localhost:' + port);
  console.log(process.env.DB_HOST);
});
