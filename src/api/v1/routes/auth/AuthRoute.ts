import AuthController from '../../controllers/auth/AuthController';
import BaseRoutes from '../BaseRouter';
import validate from '../../middlewares/auth/validator';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', validate, AuthController.login);
  }
}

export default new AuthRoutes().router;
