import { Request, Response } from 'express';

class BaseService {
  params: Request['params'];
  body: Request['body'];
  app: Request['app'];
  res: Response;

  constructor(req: Request, res: Response) {
    this.params = req.params;
    this.body = req.body;
    this.app = req.app;
    this.res = res;
  }
}

export default BaseService;
