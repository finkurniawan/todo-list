import { Request, Response } from 'express';
import Authentication from '../../utils/Authentication';

const db = require('../../models');

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password);
    const createdUser = await db.user.create({
      username,
      password: hashedPassword,
    });

    return res.send(createdUser);
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    const user = await db.user.findOne({
      where: { username },
    });

    const compare = await Authentication.passwordCompare(
      password,
      user.password
    );

    if (compare) {
      const token = Authentication.generateToken(
        user.id,
        username,
        user.password
      );
      return res.send({
        token,
      });
    }

    return res.send('auth failed');
  };

  profile = (req: Request, res: Response): Response =>
    res.send(req.app.locals.credential);
}

export default new AuthController();
