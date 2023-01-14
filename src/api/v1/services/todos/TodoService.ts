import { Op } from 'sequelize';
import BaseService from '../BaseService';

const db = require('../../models');

class TodoService extends BaseService {
  getAll = async () => {
    try {
      let { limit = 10 } = this.query;
      const {
        offset = 0,
        order_by = 'ASC',
        s: search = '',
        is_completed = null,
      } = this.query;

      if (limit >= 100) {
        limit = 100;
      }

      const { count, rows } = await db.todo.findAndCountAll({
        order: [['id', order_by]],
        where: {
          user_id: this.credential.id,
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
        include: [{ model: db.category }],
        attributes: [
          'id',
          'title',
          'category_id',
          'description',
          'is_completed',
          'deadline',
          'createdAt',
          'updatedAt',
        ],
        offset,
        limit,
      });

      return this.res.status(200).json({
        status: true,
        message: 'Get all todo successfully',
        errors: {},
        data: {
          offset,
          limit,
          count,
          rows,
        },
      });
    } catch (_) {
      return this.res.status(400).json({
        status: true,
        message: 'failed get all todo',
      });
    }
  };

  store = async () => {
    try {
      const { title, description, is_completed, deadline, category_id } =
        this.body;
      const isOverTime: any = deadline <= Date.now();
      const todo = await db.todo.create({
        user_id: this.credential.id,
        title,
        description,
        is_completed,
        deadline,
        category_id,
        over_time: isOverTime,
      });

      if (!todo) {
        return this.res.status(400).json({
          status: false,
          message: 'Todo not created',
          errors: {},
          data: {},
        });
      }

      return this.res.status(201).json({
        status: true,
        message: ' todo created',
        errors: {},
        data: todo,
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Todo not created',
        errors: {},
        data: {},
      });
    }
  };

  getOne = async () => {
    try {
      const { id } = this.params;
      const todo = await db.todo.findOne({
        where: {
          id,
          user_id: this.credential.id,
        },
        attributes: [
          'id',
          'category_id',
          'title',
          'description',
          'is_completed',
          'deadline',
          'over_time',
          'createdAt',
          'updatedAt',
        ],
      });

      return this.res.status(200).json({
        status: true,
        message: '',
        errors: {},
        data: todo,
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Todo not found',
        errors: {},
        data: {},
      });
    }
  };

  update = async () => {
    try {
      const { id } = this.params;
      const { title, description, is_completed, deadline } = this.body;

      const todo = await db.todo.update(
        {
          title,
          description,
          is_completed,
          deadline,
        },
        {
          where: {
            id,
            user_id: this.credential.id,
          },
        }
      );
      if (Number(todo) === 0) {
        return this.res.status(400).json({
          status: false,
          message: 'Todo not found',
          errors: {},
          data: {},
        });
      }

      return this.res.status(200).json({
        status: true,
        message: 'success updated',
        errors: {},
        data: {},
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Todo not found',
        errors: {},
        data: {},
      });
    }
  };

  delete = async () => {
    try {
      const { id } = this.params;
      const { id: user_id } = this.credential;
      const result = await db.todo.destroy({
        where: {
          id,
          user_id,
        },
      });

      if (Number(result) === 0) {
        return this.res.status(400).json({
          status: false,
          message: 'Todo not found',
          errors: {},
          data: {},
        });
      }
      return this.res.status(200).json({
        status: true,
        message: 'todo deleted',
        errors: {},
        data: {},
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Todo not found',
        errors: {},
        data: {},
      });
    }
  };
}
export default TodoService;
