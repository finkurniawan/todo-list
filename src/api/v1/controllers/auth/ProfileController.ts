import { Request, Response } from 'express';
import ProfileService from '../../services/accounts/ProfileService';

class Profile {
  async update(req: Request, res: Response): Promise<Response> {
    const service: ProfileService = new ProfileService(req, res);
    const data = await service.update();
    return data;
  }

  async index(req: Request, res: Response): Promise<Response> {
    const service: ProfileService = new ProfileService(req, res);
    const data = await service.index();

    return data;
  }
}

export default new Profile();
