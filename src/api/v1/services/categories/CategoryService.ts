import { Request } from 'express';

const db = require('../../models');

class CategoryService {

  body: Request['body'];

  params: Request['params'];

  constructor(req: Request) {

    this.body = req.body;
    this.params = req.params;
  }

  getAll = async () => {
    const categories = db.category.findAll();
    return categories;
  };

  store = async () => {
    const { name, description } = this.body;

    const category = await db.category.create({
      name,
      description,
    });
    return category;
  };

  getOne = async () => {
    const { id } = this.params;
    const category = await db.category.findOne({
      where: { id },
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
        where: { id},
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
