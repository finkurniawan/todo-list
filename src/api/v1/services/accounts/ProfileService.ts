import { Response } from 'express';
import Authentication from '../../utils/Authentication';
import BaseService from '../BaseService';

const db = require('../../models');

class ProfileService extends BaseService {
  async update(): Promise<Response> {
    const { body } = this;
    const { id } = this.app.locals.credential;
    const hashedPassword: string = await Authentication.passwordHash(
      body.password
    );

    const checkUserAlready = await db.user.findOne({
      where: id,
    });

    if (!checkUserAlready) {
      return this.res.status(400).json({
        status: false,
        message: 'User not found',
        errors: {},
        data: {},
      });
    }

    const updatedUser = await db.user.update(
      {
        ...body,
        password: hashedPassword,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!updatedUser) {
      return this.res.status(400).json({
        status: false,
        message: 'User not updated',
        errors: {},
        data: {},
      });
    }
    return this.res.status(200).json({
      status: true,
      message: 'Profile updated successfully',
      errors: {},
      data: {},
    });
  }

  async index(): Promise<Response> {
    const { id } = this.app.locals.credential;
    const checkUserAlready = await db.user.findOne({
      where: id,
    });

    if (!checkUserAlready) {
      return this.res.status(400).json({
        status: false,
        message: 'User not found',
        errors: {},
        data: {},
      });
    }

    const user = await db.user.findOne({
      where: {
        id,
      },
      attributes: [
        'id',
        'username',
        'email',
        'image',
        'createdAt',
        'updatedAt',
      ],
    });

    if (!user) {
      return this.res.status(400).json({
        status: false,
        message: 'Get details failed',
        errors: {},
        data: {},
      });
    }

    return this.res.status(200).json({
      status: true,
      message: 'Get details successfully',
      errors: {},
      data: {
        user,
      },
    });
  }
}

export default ProfileService;
