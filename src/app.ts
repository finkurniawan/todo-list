import { config as dotenv } from 'dotenv';
import express, { Application, NextFunction, Response, Router } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import { logger } from './api/v1/exceptions/classes/logger';
import { ErrorHandler } from './api/v1/exceptions/classes/error-handler';
import { BaseError } from './api/v1/exceptions/classes/base-error';

import AuthRoutes from './api/v1/routes/auth/AuthRoute';
import TodoRoutes from './api/v1/routes/todos/TodoRoutes';
import CategoryRoutes from './api/v1/routes/category/CategoryRoute';


class App {
  public APP: Application;
  public this.errorHandler: ErrorHandler;
  public errorMiddleware: any;

  constructor() {
    this.APP = express();
    this.plugins();
    this.routes();
    dotenv();
    this.this.errorHandler = new ErrorHandler(logger);
  }

  protected plugins(): void {
    this.APP.use(bodyParser.json());
    this.APP.use(morgan('dev'));
    this.APP.use(compression());
    this.APP.use(helmet());
    this.APP.use(cors());
    this.APP.use(this.errorMiddleware);
  }

  protected routes(): void {
    this.APP.use('/api/v1/accounts', AuthRoutes);
    this.APP.use('/api/v1/todos', TodoRoutes);
    this.APP.use('/api/v1/categories', CategoryRoutes);

    process.on('uncaughtException', async (error: Error) => {
      await this.errorHandler.handleError(error);
      if (!this.errorHandler.isTrustedError(error)) process.exit(1);
    });

    process.on('unhandledRejection', (reason: Error) => {
      throw reason;
    });

    this.errorMiddleware = async(err: BaseError, req: Request, res: Response, next: NextFunction) => {
      if (!this.errorHandler.isTrustedError(err)) {
        next(err);
        return;
      }
      await this.errorHandler.handleError(err);
    }


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
