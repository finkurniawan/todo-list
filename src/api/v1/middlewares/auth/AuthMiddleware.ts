import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction): any => {
  if (!req.headers.authorization) {
    return res.status(401).send('not authenticated');
  }

  const secretKey: string = process.env.JWT_SECRET_KEY || 'asiapp';
  const token: any = req.headers.authorization.split(' ')[1];
  console.log(secretKey);
  try {
    const credential: any = jwt.verify(token, secretKey);
    if (!credential) res.send('token invalid');

    req.app.locals.credential = credential;

    return next();
  } catch (error) {
    return res.send(error);
  }
};

export default auth;
