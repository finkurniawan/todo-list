import Home from '../../controllers/home/HomeController';
import BaseRoutes from '../BaseRouter';
import auth from '../../middlewares/auth/AuthMiddleware';

class HomeRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, Home.index);
  }
}

export default new HomeRoutes().router;
