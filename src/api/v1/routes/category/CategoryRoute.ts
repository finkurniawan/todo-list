import Category from '../../controllers/category/CategoryController';
import BaseRoutes from '../BaseRouter';
import auth from '../../middlewares/auth/AuthMiddleware';
import v from '../../validations/categories/CategoryValidator';
import validationError from '../../middlewares/validationErrorMiddleware';

class CategoryRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, Category.index);
    this.router.get('/:id', auth, Category.show);
    this.router.post(
      '/',
      auth,
      v.checkCategory(),
      validationError.handleValidationError,
      Category.create
    );
    this.router.put(
      '/:id',
      auth,
      v.checkCategory(),
      validationError.handleValidationError,
      Category.update
    );
    this.router.delete('/:id', auth, Category.delete);
  }
}

export default new CategoryRoutes().router;
