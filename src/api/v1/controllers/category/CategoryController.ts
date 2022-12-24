import { Request, Response } from 'express';
import ICategory from './ICategory';
import CategoryService from '../../services/categories/CategoryService';

class Category implements ICategory {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const categories = await service.getAll();

    return categories;
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.store();

    return category;
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.getAllFilter();

    return category;
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.update();

    return category;
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const category = await service.delete();

    return category;
  };
}

export default new Category();
