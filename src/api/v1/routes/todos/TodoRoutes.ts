import Todo from '../../controllers/todos/TodoController';
import BaseRoutes from '../BaseRouter';
import auth from '../../middlewares/auth/AuthMiddleware';
import Validate from '../../validations/todos/TodoValidator';
import v from '../../middlewares/validationErrorMiddleware';

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, Todo.index);
    this.router.get('/:id', auth, Todo.show);
    this.router.post(
      '/',
      auth,
      Validate.checkCreateTodo(),
      v.handleValidationError,
      Todo.create
    );
    this.router.put(
      '/:id',
      auth,
      Validate.checkUpdateTodo(),
      v.handleValidationError,
      Todo.update
    );
    this.router.delete('/:id', auth, Todo.delete);
  }
}

export default new TodoRoutes().router;
