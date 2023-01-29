import { Op } from 'sequelize';
import BaseService from '../BaseService';

const db = require('../../models');

class CategoryService extends BaseService {
  getAll = async () => {
    try {
      let { limit = 10, order_by = 'DESC' } = this.query;
      const { offset = 0, s: search = '' } = this.query;

      if (limit >= 100) {
        limit = 100;
      }

      if (order_by === 'DESC') {
        order_by = 'ASC';
      } else {
        order_by = 'DESC';
      }

      const { count, rows } = await db.category.findAndCountAll({
        order: [['updated_at', order_by.toString().toUpperCase()]],
        where: {
          user_id: this.credential.id,
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
        limit,
        offset,
        attributes: ['id', 'name', 'createdAt', 'updatedAt', 'icon'],
      });

      return this.res.status(200).json({
        status: true,
        message: 'Get all successfully',
        errors: {},
        data: {
          count,
          rows,
        },
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Failed on getting all categories',
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

      return this.res.status(201).json({
        status: true,
        message: 'Category added',
        errors: {},
        data: category,
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Category not added',
        errors: {},
        data: {},
      });
    }
  };

  getAllFilter = async () => {
    try {
      const { id: category_id } = this.params;
      const { id: user_id } = this.credential;
      let { limit = 10 } = this.query;
      const {
        offset = 0,
        s: search = '',
        is_completed = null,
        order_by = 'ASC',
      }: any = this.query;

      if (limit >= 100) {
        limit = 100;
      }

      const getAllTodoByCategory = db.todo.findAndCountAll({
        order: [['deadline', order_by.toString().toUpperCase()]],
        where: {
          category_id,
          user_id,
          [Op.or]: {
            title: {
              [Op.iLike]: `%${search}%`,
            },
            description: {
              [Op.iLike]: `%${search}%`,
            },
          },
          is_completed: {
            [Op.or]:
              is_completed === null
                ? [true, false]
                : [is_completed, is_completed],
          },
        },
        offset,
        limit,
      });

      const totalInProgressOnNotSearch = db.todo.count({
        where: {
          category_id,
          user_id,
          is_completed: false,
        },
      });

      const totalDoneOnNotSearch = db.todo.count({
        where: {
          category_id,
          user_id,
          is_completed: true,
        },
      });

      const totalDoneOnSearch = db.todo.count({
        where: {
          category_id,
          user_id,
          [Op.or]: {
            title: {
              [Op.iLike]: `%${search}%`,
            },
            description: {
              [Op.iLike]: `%${search}%`,
            },
          },
          is_completed: true,
        },
        offset,
        limit,
      });

      const totalInProgressOnSearch = db.todo.count({
        where: {
          category_id,
          user_id,
          [Op.or]: {
            title: {
              [Op.iLike]: `%${search}%`,
            },
            description: {
              [Op.iLike]: `%${search}%`,
            },
          },
          is_completed: false,
        },
        offset,
        limit,
      });

      const [{ count, rows }, totalInProgress, totalDone] = await Promise.all([
        getAllTodoByCategory,
        !search ? totalInProgressOnNotSearch : totalInProgressOnSearch,
        !search ? totalDoneOnNotSearch : totalDoneOnSearch,
      ]);

      return this.res.status(200).json({
        status: true,
        message: 'Get all TODOs by category successfully',
        errors: {},
        data: {
          totalTodos: count,
          totalDone,
          totalInProgress,
          rows,
        },
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Get all TODOs by category failed',
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

      return this.res.status(200).json({
        status: true,
        message: 'Category name updated successfully',
        errors: {},
        data: { updated: category },
      });
    } catch (err) {
      return this.res.status(400).json({
        status: false,
        message: 'Category name not updated',
        errors: {},
        data: {},
      });
    }
  };

  delete = async () => {
    const { id } = this.params;

    try {
      const category = await db.category.destroy({
        where: { id, user_id: this.credential.id },
      });

      return this.res.status(200).json({
        status: true,
        message: 'Category deleted successfully',
        errors: {},
        data: { deleted: category },
      });
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
