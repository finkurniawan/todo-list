import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const validate = [
  check('username').isString(),
  check('password').isLength({ min: 8 }),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      res.status(422).json({
        status: false,
        data: null,
        message: 'Validation Error',
        errors: errors.array(),
      });

    return next();
  },
];

export default validate;
