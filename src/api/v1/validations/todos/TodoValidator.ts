import { body } from 'express-validator';

class TodoValidator {
  checkCreateTodo() {
    return [
      body('title')
        .isString()
        .withMessage('The title value should be a string')
        .notEmpty()
        .withMessage('The title value should not be empty')
        .isLength({ max: 100, min: 1 })
        .withMessage('The title value should be between 1 and 100 characters'),
      body('description')
        .isString()
        .withMessage('The description value should be a string')
        .notEmpty()
        .withMessage('The description value should not be empty')
        .isLength({ max: 500, min: 1 })
        .withMessage(
          'The description value should be between 1 and 500 characters'
        ),
      body('deadline')
        .isString()
        .withMessage('The deadLine value should be a date')
        .notEmpty()
        .withMessage('The deadLine value should not be empty'),
      body('is_completed')
        .isBoolean()
        .withMessage('The isCompleted value should be a boolean')
        .notEmpty()
        .withMessage('The isCompleted value should not be empty'),
      body('category_id')
        .isInt()
        .withMessage('The category id value should be a string')
        .withMessage('The category id value should not be empty'),
    ];
  }

  checkUpdateTodo() {
    return [
      body('title')
        .isString()
        .withMessage('The title value should be a string')
        .notEmpty()
        .withMessage('The title value should not be empty')
        .isLength({ max: 100, min: 1 })
        .withMessage('The title value should be between 1 and 100 characters'),
      body('description')
        .isString()
        .withMessage('The description value should be a string')
        .notEmpty()
        .withMessage('The description value should not be empty')
        .isLength({ max: 500, min: 1 })
        .withMessage(
          'The description value should be between 1 and 500 characters'
        ),
      body('is_completed')
        .isBoolean()
        .withMessage('The isCompleted value should be a boolean')
        .notEmpty()
        .withMessage('The isCompleted value should not be empty'),
    ];
  }
}

export default new TodoValidator();
