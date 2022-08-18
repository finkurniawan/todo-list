import { Request, Response } from 'express';
const db = require('../../models');

class Profile {
  async updateProfile(req: Request, res: Response): Promise<Response> {
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
}

export default new Profile();
