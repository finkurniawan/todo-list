import { Request, Response } from 'express';
const db = require('../../models');

class Profile {
  async update(req: Request, res: Response): Promise<Response> {
    const service: CategoryService = new CategoryService(req);
    const category = await service.store();
    const { body } = req;
    const { id } = req.app.locals.credential;
    const checkUserAlready = await db.user.findOne({
      where: id,
    });

    if (!checkUserAlready) {
      return res.status(400).json({
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
      return res.status(400).json({
        status: false,
        data: {},
        message: 'User not updated',
        errors: {},
      });
    } else {
      return res.status(200).json({
        status: true,
        data: {},
        message: 'Profile updated successfully',
      });
    }
  }
  async index(req: Request, res: Response): Promise<Response> {
    const service: CategoryService = new CategoryService(req);
    const category = await service.store();

    const { id } = req.app.locals.credential;
    const checkUserAlready = await db.user.findOne({
      where: id,
    });

    if (!checkUserAlready) {
      return res.status(400).json({
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
      return res.status(400).json({
        status: false,
        message: 'Get details failed',
        errors: {},
        data: {},
      });
    }

    return res.status(400).json({
      status: false,
      message: 'Get details successfully',
      errors: {},
      data: {
        user,
      },
    });
  }
}

export default new Profile();
