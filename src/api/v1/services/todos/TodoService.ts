import BaseService from '../BaseService';

const db = require('../../models');

class TodoService extends BaseService {
  getAll = async () => {
    try {
      let { limit = 10, offset = 0 } = this.query;
      if (limit >= 100) {
        limit = 100;
      }
      const todos = db.todo.findAll({
        where: { user_id: this.credential.id },
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
      return todos;
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Todo not found',
        errors: {},
        data: {},
      });
    }
  };

  store = async () => {
    try {
      const {
        title,
        description,
        isCompleted,
        deadLine: deadline,
        categoryId: category_id,
      } = this.body;
      const isOverTime = deadline <= new Date();
      const todo = await db.todo.create({
        user_id: this.credential.id,
        title,
        description,
        is_completed: isCompleted,
        deadline,
        category_id,
        over_time: isOverTime,
      });
      return todo;
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
        where: { id, user_id: this.credential.id },
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

      return todo;
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
      const { title, description, isCompleted } = this.body;
      const todo = await db.todo.update(
        {
          title,
          description,
          is_completed: isCompleted,
        },
        {
          where: { id, user_id: this.credential.id },
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
      return todo;
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
      const todo = await db.todo.destroy({
        where: { id, user_id },
      });

      if (Number(todo) === 0) {
        return this.res.status(400).json({
          status: false,
          message: 'Todo not found',
          errors: {},
          data: {},
        });
      }

      return todo;
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
