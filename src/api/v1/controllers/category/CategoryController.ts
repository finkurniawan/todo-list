import { Request, Response } from 'express';
import IController from '../Interface';
import CategoryService from '../../services/categories/CategoryService';

class Category implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req);
    const categories = await service.getAll();

    return res.send({
      data: categories,
      message: '',
    });
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req);
    const category = await service.store();

    return res.send({
      data: category,
      message: ' category created',
    });
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req);
    const category = await service.getOne();

    return res.send({
      data: category,
      message: '',
    });
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req);
    const category = await service.update();

    return res.send({
      data: category,
      message: 'success updated',
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req);
    const category = await service.delete();

    return res.send({
      data: category,
      message: 'category deleted',
    });
  };
}

export default new Category();
