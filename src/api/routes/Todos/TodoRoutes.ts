import Todo from '../../controllers/Todos/TodoController';
import BaseRoutes from '../BaseRouter';
import auth from '../../middlewares/auth/AuthMiddleware';
import validate from '../../validations/Todos/TodoValidator';

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, Todo.index);
    this.router.get('/:id', auth, Todo.show);
    this.router.post('/', auth, validate, Todo.create);
    this.router.put('/:id', auth, validate, Todo.update);
    this.router.delete('/:id', auth, Todo.delete);
  }
}

export default new TodoRoutes().router;
