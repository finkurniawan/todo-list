import { Request } from 'express';

const db = require('../../models');

class CategoryService {
  body: Request['body'];
  app: Request['app'];
  params: Request['params'];

  constructor(req: Request) {
    this.body = req.body;
    this.params = req.params;
    this.app = req.app;
  }

  getAll = async () => {
    const categories = db.category.findAll();
    return categories;
  };

  store = async () => {
    const { name } = this.body;
    const { id } = this.app.locals.credential;

    const category = await db.category.create({
      user_id: id,
      name,
    });
    return category;
  };

  getAllFilter = async () => {
    // const { id: category_id } = this.params;
    const { id: user_id } = this.app.locals.credential;
    const category = await db.todo.findAll({
      where: { category_id: 3, user_id },
    });

    return category;
  };

  update = async () => {
    const { id } = this.params;
    const { name, description } = this.body;
    const category = await db.category.update(
      {
        name,
        description,
      },
      {
        where: { id },
      }
    );

    return category;
  };

  delete = async () => {
    const { id } = this.params;

    const category = await db.category.destroy({
      where: { id },
    });

    return category;
  };
}

export default CategoryService;
