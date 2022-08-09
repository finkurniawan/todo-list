import { Request } from 'express';

const db = require('../../models');

class TodoService {
  credential: {
    id: number;
  };

  body: Request['body'];

  params: Request['params'];

  constructor(req: Request) {
    this.credential = req.app.locals.credential;

    this.body = req.body;
    this.params = req.params;
  }

  getAll = async () => {
    const todos = db.todo.findAll({
      where: { user_id: this.credential.id },
    });
    return todos;
  };

  store = async () => {
    const { title, description, isCompleted } = this.body;

    const todo = await db.todo.create({
      user_id: this.credential.id,
      title,
      description,
      is_completed: isCompleted,
    });
    return todo;
  };

  getOne = async () => {
    const { id } = this.params;
    console.log(this.credential.id);
    const todo = await db.todo.findOne({
      where: { id, user_id: this.credential.id },
    });

    return todo;
  };

  update = async () => {
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

    return todo;
  };

  delete = async () => {
    const { id } = this.params;

    const todo = await db.todo.destroy({
      where: { id, user_id: this.credential.id },
    });

    return todo;
  };
}

export default TodoService;
