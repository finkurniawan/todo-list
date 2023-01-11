import { Request, Response } from 'express';
import ICategory from './ICategory';
import CategoryService from '../../services/categories/CategoryService';

class Category implements ICategory {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const result = await service.getAll();

    return result;
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const result = await service.store();

    return result;
  };

  show = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const result = await service.getAllFilter();

    return result;
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const result = await service.update();

    return result;
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const service: CategoryService = new CategoryService(req, res);
    const result = await service.delete();

    return result;
  };

}

export default new Category();
