import { Request, Response } from 'express';
import AuthService from '../../services/accounts/AuthService';

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const service: AuthService = new AuthService(req, res);
    const data = await service.register();

    return data;
  }

  async login(req: Request, res: Response): Promise<Response> {
    const service: AuthService = new AuthService(req, res);
    const data = await service.login();
    return data;
  }
}

export default new AuthController();
