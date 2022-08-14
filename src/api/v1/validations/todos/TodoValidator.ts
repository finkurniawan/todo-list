import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const validate = [
  check('title').isString(),
  check('description').isString(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        data: {},
        message: 'Validation Error',
        errors: errors.array(),
      });
    }
    return next();
  },
];

export default validate;
