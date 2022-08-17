import request from 'supertest';
import App from '../../src/app';

const { APP } = new App();

describe('Category testing endpoint', async () => {
  const category: object = {
    icon: new Date(),
    name: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP)
      .post('/api/v1/categories')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should display all category data ', async () => {
    const response: any = await request(APP).get('/api/v1/categories');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP)
      .put('/api/v1/categories/1')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to delete category data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});

describe('Perform a test on a category endpoint with failed results', async () => {
  const category: object = {
    icon: new Date(),
    name: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP)
      .post('/api/v1/categories')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should display all category data ', async () => {
    const response: any = await request(APP).get('/api/v1/categories');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP)
      .put('/api/v1/categories/1')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to delete category data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});

describe('Perform a test on a category endpoint with failed results', async () => {
  const category: object = {
    icon: new Date(),
    name: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP)
      .post('/api/v1/categories')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should display all category data ', async () => {
    const response: any = await request(APP).get('/api/v1/categories');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP)
      .put('/api/v1/categories/1')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to delete category data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});

describe('Perform a test on a category endpoint with failed results', async () => {
  const category: object = {
    icon: new Date(),
    name: new Date(),
  };

  test('Should have key status, data and message when created', async () => {
    const response: any = await request(APP)
      .post('/api/v1/categories')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should display all category data ', async () => {
    const response: any = await request(APP).get('/api/v1/categories');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should show one data todo', async () => {
    const response: any = await request(APP).get('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to change the todo data based on the given id parameter', async () => {
    const response: any = await request(APP)
      .put('/api/v1/categories/1')
      .send(category);

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });

  test('should be able to delete category data based on parameters', async () => {
    const response: any = await request(APP).delete('/api/v1/categories/1');

    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('message');
  });
});
