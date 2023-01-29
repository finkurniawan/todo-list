import { Request, Response } from 'express';
import ProfileService from '../../services/accounts/ProfileService';

class Profile {
  update = async (req: Request, res: Response): Promise<Response> => {
    const service: ProfileService = new ProfileService(req, res);
    const data = await service.update();
    return data;
  };

  index = async (req: Request, res: Response): Promise<Response> => {
    const service: ProfileService = new ProfileService(req, res);
    const data = await service.index();

    return data;
  };
}

export default new Profile();
