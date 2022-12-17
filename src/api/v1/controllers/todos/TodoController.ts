import { Request, Response } from 'express';
import IController from '../Interface';
import TodoService from '../../services/todos/TodoService';

class Todo implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req, res);
    const todos = await service.getAll();

    return todos;
  };

  // eslint-disable-next-line class-methods-use-this
  create = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req, res);
    const todo = await service.store();
    console.log(todo);
    // if (!todo) {
    //   return res.status(400)
    //     .json({
    //       status: false,
    //       message: "Todo not created",
    //       errors: {},
    //       data: {}
    //     });
    // } else {
    return res.status(201).json({
      status: true,
      message: ' todo created',
      errors: {},
      data: todo,
    });
    // }
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req, res);
    const todo = await service.getOne();

    return res.status(200).json({
      status: true,
      message: '',
      errors: {},
      data: todo,
    });
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req, res);
    const update = await service.update();
  if(!update){
    return res.status(400).json({
      status: false,
      message: 'Todo not found',
      errors: {},
      data: {},
    });
  }
    return res.status(200).json({
      status: true,
      message: 'success updated',
      errors: {},
      data: {},
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: TodoService = new TodoService(req, res);
    await service.delete();

    return res.status(200).json({
      status: true,
      message: 'todo deleted',
      errors: {},
      data: {},
    });
  };
}

export default new Todo();
