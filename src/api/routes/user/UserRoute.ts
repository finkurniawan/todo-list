import User from '../../controllers/user/UserController';
import BaseRoutes from '../BaseRouter';
import auth from '../../middlewares/auth/AuthMiddleware';

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, User.index);
    this.router.post('/', User.create);
    this.router.get('/:id', User.show);
    this.router.put('/:id', User.update);
    this.router.delete('/:id', User.delete);
  }
}

export default new UserRoutes().router;
