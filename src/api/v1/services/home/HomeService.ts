import BaseService from '../BaseService';

const db = require('../../models');

class HomeService extends BaseService {
  getAll = async () => {
    try {
      const totalTodos = await db.todo.count({
        where: {
          user_id: this.credential.id,
        },
      });
      const { count: totalDone } = await db.todo.findAndCountAll({
        where: {
          is_completed: true,
          user_id: this.credential.id,
        },
      });

      const { count: totalInProgress } = await db.todo.findAndCountAll({
        where: {
          is_completed: false,
          user_id: this.credential.id,
        },
      });

      return this.res.status(200).json({
        status: true,
        message: 'Get Home successfully',
        errors: {},
        data: {
          totalDone,
          totalInProgress,
          totalTodos,
        },
      });
    } catch (_) {
      return this.res.status(400).json({
        status: false,
        message: 'Home not found',
        errors: {},
        data: {},
      });
    }
  };
}

export default HomeService;
