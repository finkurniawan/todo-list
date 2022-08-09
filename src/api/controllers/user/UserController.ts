import { Request, Response } from 'express';
import IController from '../Interface';

const data: any[] = [
  { id: 1, name: 'adi' },
  { id: 2, name: 'budi' },
  { id: 3, name: 'andi' },
];
class User implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({
      id,
      name,
    });
    return res.send('Create Success');
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    const person = data.find((item) => item.id == id);
    return res.send(person);
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    const person = data.find((item) => item.id == id);
    person.name = name;

    return res.send('update success');
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    const people = data.filter((item) => item.id != id);
    return res.send(people);
  }
}

export default new User();
