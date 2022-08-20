import { Response } from 'express';
import Authentication from '../../utils/Authentication';
import BaseService from '../BaseService';
const db = require('../../models');

class AuthService extends BaseService {
  async register(): Promise<Response> {
    const { full_name, username, email, password } = this.body;
    const hashedPassword: string = await Authentication.passwordHash(password);

    const checkEmail = await db.user.findOne({
      where: {
        email,
      },
    });

    if (checkEmail) {
      return this.res.status(400).json({
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
      return this.res.status(400).json({
        status: false,
        data: {},
        message: 'User not created',
      });
    }

    return this.res.status(201).json({
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
      return this.res.status(400).json({
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
      this.res.status(400).json({
        status: false,
        data: {},
        message: "Password doesn't match",
      });
    }

    if (compare) {
      const token = Authentication.generateToken(user.id, email, user.password);

      return this.res.status(200).json({
        status: true,
        data: {
          token,
        },
        message: 'Login successfully',
      });
    }

    return this.res.status(400).json({
      status: false,
      data: {},
      message: 'Authentication failed',
    });
  }
}

export default AuthService;
