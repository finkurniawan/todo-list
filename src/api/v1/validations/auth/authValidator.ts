import { body } from 'express-validator';

class AccountValidator {
  checkCreateAccount() {
    return [
      body('username')
        .isString()
        .withMessage('The username value should be a string')
        .notEmpty()
        .withMessage('The username value should not be empty')
        .isLength({ max: 50, min: 1 })
        .withMessage(
          'The username value should be between 1 and 50 characters'
        ),
      body('email')
        .isEmail()
        .withMessage('The email value should be a valid email')
        .notEmpty()
        .withMessage('The email value should not be empty')
        .isLength({ max: 30, min: 1 })
        .withMessage('The email value should be between 1 and 30 characters'),
      body('password')
        .isString()
        .withMessage('The password value should be a string')
        .notEmpty()
        .withMessage('The password value should not be empty')
        .isLength({ min: 8, max: 50 })
        .withMessage(
          'The password value should be between 8 and 50 characters'
        ),
    ];
  }

  checkLoginAccount() {
    return [
      body('email')
        .isEmail()
        .withMessage('The email value should be a valid email')
        .notEmpty()
        .withMessage('The email value should not be empty')
        .isLength({ max: 30, min: 1 })
        .withMessage('The email value should be between 1 and 30 characters'),
      body('password')
        .isString()
        .withMessage('The password value should be a string')
        .notEmpty()
        .withMessage('The password value should not be empty')
        .isLength({ min: 8, max: 50 })
        .withMessage(
          'The password value should be between 8 and 50 characters'
        ),
    ];
  }

  checkUpdateProfile() {
    return [
      body('full_name')
        .isString()
        .withMessage('The full_name value should be a string')
        .notEmpty()
        .withMessage('The full_name value should not be empty')
        .isLength({ max: 50, min: 1 })
        .withMessage(
          'The full_name value should be between 1 and 50 characters'
        ),
      body('email')
        .notEmpty()
        .withMessage('The email value should not be empty')
        .isEmail()
        .withMessage('The email value should be a valid email')
        .isLength({ max: 30, min: 1 })
        .withMessage('The email value should be between 1 and 30 characters'),
      body('password')
        .isString()
        .withMessage('The password value should be a string')
        .notEmpty()
        .withMessage('The password value should not be empty')
        .isLength({ min: 8, max: 50 })
        .withMessage(
          'The password value should be between 8 and 50 characters'
        ),
    ];
  }
}

export default new AccountValidator();
