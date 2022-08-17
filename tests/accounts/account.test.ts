import request from 'supertest';
import App from '../../src/app';
const { APP } = new App();
describe('Test Authentication Route', () => {
  const tableData = [
    {
      username: 'name 1',
      email: +new Date() + '@gmail.com',
      password: 'password1',
    },
    {
      username: 'name 2',
      email: +new Date() + '@gmail.com',
      password: 'password2',
    },
  ];

  test.each(tableData)(
    'should have key status, data and message when created',
    async (value) => {
      const response: any = await request(APP)
        .post('/api/v1/accounts/register')
        .send(value);
      console.log(value, 'created account');

      const { body } = response;
      expect(body).toHaveProperty('status');
      expect(body).toHaveProperty('data');
      expect(body).toHaveProperty('message');
      expect(body).toEqual({
        status: true,
        data: {},
        message: 'Account created successfully',
      });
    }
  );

  test.each(tableData)(
    'should have key status, data and message when login is successful',
    async (value) => {
      const response: any = await request(APP)
        .post('/api/v1/accounts/login')
        .send(value);

      const { body } = response;
      expect(body).toHaveProperty('status');
      expect(body).toHaveProperty('data');
      expect(body).toHaveProperty('message');
      expect(body.data).toHaveProperty('token');
      expect(body.message).toBe('Login successfully');
    }
  );
});

describe('Test Authentication Route failed', () => {
  const tableData = [
    {
      username: 'name 1',
      email: 'email1@gmail.com',
      password: 'password12',
    },
    {
      username: 'name 2',
      email: 'email2@gmail.com',
      password: 'password22',
    },
  ];

  test.each(tableData)(
    'should have key status, data and message when created',
    async (value) => {
      const response: any = await request(APP)
        .post('/api/v1/accounts/register')
        .send(value);

      const { body } = response;
      expect(body).toHaveProperty('status');
      expect(body).toHaveProperty('data');
      expect(body).toHaveProperty('message');
      expect(body).toEqual({
        status: false,
        data: {},
        message: 'Account already exists',
      });
    }
  );
  test.each(tableData)(
    'should have key status, data and message when login is successful',
    async (value) => {
      const response: any = await request(APP)
        .post('/api/v1/accounts/login')
        .send(value);

      const { body } = response;
      expect(body).toHaveProperty('status');
      expect(body).toHaveProperty('data');
      expect(body).toHaveProperty('message');
      expect(body.status).toBeFalsy();
      expect(body.message).toBe("Password doesn't match");
    }
  );

  test.failing('Should invalid email', () => {
    const response: any = request(APP).post('/api/v1/accounts/register').send({
      username: 'name 1',
      email: 'email1@gmail',
      password: 'password1',
    });

    expect(response).toBe('Invalid email');
  });
});
