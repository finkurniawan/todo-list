import { Request, Response } from 'express';
import Authentication from '../../utils/Authentication';

const db = require('../../models');

class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    const { username, email, password } = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    const checkEmail = await db.user.findOne({
      where: {
        email,
      },
    });

    if (checkEmail)
      return res.status(400).json({
        status: false,
        data: {},
        message: 'Email already exists',
      });

    const createdUser = await db.user.create({
      username,
      email,
      password: hashedPassword,
    });

    if (!createdUser) {
      return res.status(400).json({
        status: false,
        data: {},
        message: 'User not created',
      });
    }

    return res.status(201).json({
      status: true,
      data: {},
      message: 'Register successfully',
    });
  }

  login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    const user = await db.user.findOne({
      where: { email },
    });

    if (!user) {
      res.status(400).json({
        status: false,
        data: {},
        message: 'User not found',
        errors: [],
      });
    }

    const compare = await Authentication.passwordCompare(
      password,
      user.password
    );

    if (!compare) {
      res.status(400).json({
        status: false,
        data: {},
        message: "Password doesn't match",
      });
    }

    if (compare) {
      const token = Authentication.generateToken(user.id, email, user.password);

      return res.status(200).json({
        status: true,
        data: {
          token,
        },
        message: 'Login Successfully',
      });
    }

    return res.send('auth failed');
  };
}

export default new AuthController();
