import { Request, Response } from 'express';
import IHome from './IHome';
import HomeService from '../../services/home/HomeService';

class Home implements IHome {
  index = async (req: Request, res: Response): Promise<Response> => {
    const service: HomeService = new HomeService(req, res);
    const home = await service.getAll();

    return home;
  };
}

export default new Home();
