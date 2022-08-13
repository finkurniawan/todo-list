import { Request, Response } from 'express';
import IController from '../Interface';
import TodoService from '../../services/todos/TodoService';

class Todo implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    return res.send({
      data: todos,
      message: '',
    });
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.store();

    return res.send({
      data: todo,
      message: ' todo created',
    });
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.getOne();

    return res.send({
      data: todo,
      message: '',
    });
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.update();

    return res.send({
      data: todo,
      message: 'success updated',
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req);
    const todo = await service.delete();

    return res.send({
      data: todo,
      message: 'todo deleted',
    });
  };
}

export default new Todo();
