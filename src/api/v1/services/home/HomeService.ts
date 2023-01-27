import BaseService from '../BaseService';

const db = require('../../models');

class HomeService extends BaseService {
  getAll = async () => {
    try {
      const totalCategoriesTask = db.category.count({
        where: {
          user_id: this.credential.id,
        },
      });

      const totalTodosTask = db.todo.count({
        where: {
          user_id: this.credential.id,
        },
      });
      const totalDoneTask = db.todo.count({
        where: {
          is_completed: true,
          user_id: this.credential.id,
        },
      });

      const totalInProgressTask = db.todo.count({
        where: {
          is_completed: false,
          user_id: this.credential.id,
        },
      });

      const [totalCategories, totalTodos, totalDone, totalInProgress] =
        await Promise.all([
          totalCategoriesTask,
          totalTodosTask,
          totalDoneTask,
          totalInProgressTask,
        ]);

      return this.res.status(200).json({
        status: true,
        message: 'Get Home successfully',
        errors: {},
        data: {
          totalDone,
          totalInProgress,
          totalTodos,
          totalCategories,
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
