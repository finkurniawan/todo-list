import { Request, Response } from 'express';
import Authentication from '../../utils/Authentication';
const db = require('../../models');

class AuthService {
  body: Request['body'];
  app: Request['app'];
  params: Request['params'];
  status: Response['status'];
  json: Response['json'];
  send: Response['send'];

  constructor(req: Request, res: Response) {
    this.body = req.body;
    this.params = req.params;
    this.app = req.app;
    this.status = res.status;
    this.json = res.json;
    this.send = res.send;
  }

  async register(): Promise<Response> {
    const { full_name, username, email, password } = this.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    const checkEmail = await db.user.findOne({
      where: {
        email,
      },
    });

    if (checkEmail) {
      return this.status(400).json({
        status: false,
        message: 'Account already exists',
        data: {},
      });
    }

    const createdUser = await db.user.create({
      full_name,
      username,
      email,
      password: hashedPassword,
      image: 'default.jpg',
    });

    if (!createdUser) {
      return this.status(400).json({
        status: false,
        data: {},
        message: 'User not created',
      });
    }

    return this.status(201).json({
      status: true,
      data: {},
      message: 'Account created successfully',
    });
  }

  async login(): Promise<Response> {
    const { email, password } = this.body;

    const user = await db.user.findOne({
      where: { email },
    });

    if (!user) {
      return this.status(400).json({
        status: false,
        data: {},
        message: 'User not found',
        errors: {},
      });
    }

    const compare = await Authentication.passwordCompare(
      password,
      user.password
    );

    if (!compare) {
      this.status(400).json({
        status: false,
        data: {},
        message: "Password doesn't match",
      });
    }

    if (compare) {
      const token = Authentication.generateToken(user.id, email, user.password);

      return this.status(200).json({
        status: true,
        data: {
          token,
        },
        message: 'Login successfully',
      });
    }

    return this.status(400).json({
      status: false,
      data: {},
      message: 'Authentication failed',
    });
  }
}

export default AuthService;
