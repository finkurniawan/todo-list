import AuthController from '../../controllers/auth/AuthController';
import BaseRoutes from '../BaseRouter';
import AccountValidator from '../../validations/auth/authValidator';
import ValidationError from '../../middlewares/validationErrorMiddleware';
class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post(
      '/register',
      AccountValidator.checkCreateAccount(),
      ValidationError.handleValidationError,
      AuthController.register
    );
    this.router.post(
      '/login',
      AccountValidator.checkLoginAccount(),
      ValidationError.handleValidationError,
      AuthController.login
    );
  }
}

export default new AuthRoutes().router;
