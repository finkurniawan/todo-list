import Category from '../../controllers/category/CategoryController';
import BaseRoutes from '../BaseRouter';
import auth from '../../middlewares/auth/AuthMiddleware';
import validate from '../../validations/categories/CategoryValidator';

class CategoryRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, Category.index);
    this.router.get('/:id', auth, Category.show);
    this.router.post('/', auth, validate, Category.create);
    this.router.put('/:id', auth, validate, Category.update);
    this.router.delete('/:id', auth, Category.delete);
  }
}

export default new CategoryRoutes().router;
