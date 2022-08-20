import Todo from '../../controllers/todos/TodoController';
import BaseRoutes from '../BaseRouter';
import auth from '../../middlewares/auth/AuthMiddleware';
import Validate from '../../validations/todos/TodoValidator';
import e from '../../middlewares/validationErrorMiddleware';

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, Todo.index);
    this.router.get('/:id', auth, Todo.show);
    this.router.post(
      '/',
      auth,
      Validate.checkCreateTodo(),
      e.handleValidationError,
      Todo.create
    );
    this.router.put(
      '/:id',
      auth,
      Validate.checkUpdateTodo(),
      e.handleValidationError,
      Todo.update
    );
    this.router.delete('/:id', auth, Todo.delete);
  }
}

export default new TodoRoutes().router;
