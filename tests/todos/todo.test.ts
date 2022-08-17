import request from 'supertest';
import App from '../../src/app';

const { APP } = new App();

describe('Todo testing endpoint', () => {
  const todo: object = {
    title: new Date(),
    description: new Date(),
    completed: false,
    deadline: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP).post('/api/v1/todos').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should display all todo data ', async () => {
    const response: any = await request(APP).get('/api/v1/todos');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP).put('/api/v1/todos/1').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to delete todo data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});

describe('Todo testing endpoint', () => {
  const todo: object = {
    title: new Date(),
    description: new Date(),
    completed: false,
    deadline: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP).post('/api/v1/todos').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should display all todo data ', async () => {
    const response: any = await request(APP).get('/api/v1/todos');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP).put('/api/v1/todos/1').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to delete todo data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});

describe('Todo testing endpoint', () => {
  const todo: object = {
    title: new Date(),
    description: new Date(),
    completed: false,
    deadline: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP).post('/api/v1/todos').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should display all todo data ', async () => {
    const response: any = await request(APP).get('/api/v1/todos');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP).put('/api/v1/todos/1').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to delete todo data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});

describe('Todo testing endpoint', () => {
  const todo: object = {
    title: new Date(),
    description: new Date(),
    completed: false,
    deadline: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP).post('/api/v1/todos').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should display all todo data ', async () => {
    const response: any = await request(APP).get('/api/v1/todos');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP).put('/api/v1/todos/1').send(todo);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('Should be able to delete todo data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/todos/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});
