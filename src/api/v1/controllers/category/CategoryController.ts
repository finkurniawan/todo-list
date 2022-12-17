import { Request, Response } from 'express';
import IController from '../Interface';
import CategoryService from '../../services/categories/CategoryService';

class Category implements IController {
  // eslint-disable-next-line class-methods-use-this
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const categories = await service.getAll();

    return categories;
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.store();

    return res.status(201).json({
      status: true,
      message: ' category created',
      errors: {},
      data: category,
    });
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.getAllFilter();

    return category;
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.update();

    return res.status(200).json({
      status: true,
      message: 'success updated',
      errors: {},
      data: { updated: category },
    });
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.delete();

    return res.status(200).json({
      status: true,
      message: 'category deleted',
      errors: {},
      data: { deleted: category },
    });
  };
}

export default new Category();
