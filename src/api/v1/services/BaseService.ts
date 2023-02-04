import { Request, Response } from 'express';

class BaseService {
  params: Request['params'];

  body: Request['body'];
  query: Request['query'];
  app: Request['app'];

  credential: Request['app']['locals']['credential'];

  res: Response;
  req: Request;

  constructor(req: Request, res: Response) {
    this.credential = req.app.locals.credential;
    this.params = req.params;
    this.body = req.body;
    this.app = req.app;
    this.res = res;
    this.req = req;
    this.query = req.query;
  }
}

export default BaseService;
