import AuthController from '../../controllers/auth/AuthController';
import BaseRoutes from '../BaseRouter';
import validate from '../../middlewares/auth/validator';
import auth from '../../middlewares/auth/AuthMiddleware';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', validate, AuthController.register);
    this.router.post('/login', validate, AuthController.login);
    this.router.get('/profile', auth, AuthController.profile);
  }
}

export default new AuthRoutes().router;
