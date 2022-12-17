import BaseService from '../BaseService';
import {AppError,HttpCode} from '../../exceptions/appError'
import App from "../../../../app";
import { BaseError } from "../../exceptions/classes/base-error";
import { APIError } from "../../exceptions/classes/api-error";
const db = require('../../models');

class CategoryService extends BaseService {
  getAll = async () => {
    try {
      let { limit = 10, offset = 0 } = this.query;
      if (limit >= 100) {
        limit = 100;
      }

      const categories = await db.category.findAll({
        where: {
          user_id: this.credential.id,
        },
        limit,
        offset,
        attributes: ['id', 'name', 'createdAt', 'updatedAt', 'icon'],
      });

      const total = await db.category.count({
        where: {
          user_id: this.credential.id,
        },
      });

      return this.res.status(200).json({
        status: true,
        message: 'Successfully',
        errors: {},
        data: {
          categories,
          total,
        },
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Category not found',
        errors: {},
        data: {},
      });
    }
  };

  store = async () => {
    const { name } = this.body;
    const { id: user_id } = this.credential;

    try {
      const category = await db.category.create(
        {
          user_id,
          name,
        },
        { fields: ['name', 'user_id', 'createdAt', 'updatedAt'] }
      );
      return category;
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Category not created',
        errors: {},
        data: {},
      });
    }
  };

  getAllFilter = async () => {
    try {
      const { id: category_id } = this.params;
      const { id: user_id } = this.credential;
      let { limit = 10, offset = 0 } = this.query;
      if (limit >= 100) {
        limit = 100;
      }
      const category = await db.todo.findAll({
        where: { category_id, user_id },
        offset,
        limit,
      });

      const total = await db.todo.count({
        where: {
          category_id,
          user_id: this.credential.id,
        },
      });

      return this.res.status(200).json({
        status: true,
        message: 'Get all todo by category successfully',
        errors: {},
        category,
        total,
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Category not found',
        errors: {},
        data: {},
      });
    }
  };

  update = async () => {
    const { id } = this.params;
    const { name, description } = this.body;
    try {
      const category = await db.category.update(
        {
          name,
          description,
        },
        {
          where: { id, user_id: this.credential.id },
        }
      );

      return category;
    } catch (err) {
      // return this.res.status(400).json({
      //   status: false,
      //   message: 'Category not updated',
      //   errors: {},
      //   data: {},
      // });
      const message = err instanceof APIError ? err.message : `Generic error for user`;
      this.res.status((<BaseError>err)?.httpCode || 500).send(message);
      next(err);
    }
  };

  delete = async () => {
    const { id } = this.params;

    try {
      const category = await db.category.destroy({
        where: { id, user_id: this.credential.id },
      });

      return category;
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Category not deleted',
        errors: {},
        data: {},
      });
    }
  };
}

export default CategoryService;
