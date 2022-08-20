import { body } from 'express-validator';

class CategoryValidator {
  checkCategory() {
    return [
      body('name')
        .isString()
        .withMessage('This field must be a string')
        .notEmpty()
        .withMessage('This field is required')
        .isLength({ min: 3 })
        .withMessage('This field must be at least 3 characters long'),
    ];
  }
}

export default new CategoryValidator();
