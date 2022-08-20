import { Response } from 'express';
import BaseService from '../BaseService';
const db = require('../../models');

class ProfileService extends BaseService {
  async update(): Promise<Response> {
    const { body } = this;
    const { id } = this.app.locals.credential;
    const checkUserAlready = await db.user.findOne({
      where: id,
    });

    if (!checkUserAlready) {
      return this.res.status(400).json({
        status: false,
        data: {},
        message: 'User not found',
        errors: {},
      });
    }

    const updatedUser = await db.user.update(
      {
        ...body,
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
        data: {},
        message: 'User not updated',
        errors: {},
      });
    } else {
      return this.res.status(200).json({
        status: true,
        data: {},
        message: 'ProfileService updated successfully',
      });
    }
  }
  async index(): Promise<Response> {
    const { id } = this.app.locals.credential;
    const checkUserAlready = await db.user.findOne({
      where: id,
    });

    if (!checkUserAlready) {
      return this.res.status(400).json({
        status: false,
        data: {},
        message: 'User not found',
        errors: {},
      });
    }

    const user = await db.user.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return this.res.status(400).json({
        status: false,
        message: 'Get details failed',
        errors: {},
        data: {},
      });
    }

    return this.res.status(400).json({
      status: false,
      message: 'Get details successfully',
      errors: {},
      data: {
        user,
      },
    });
  }
}

export default ProfileService;
