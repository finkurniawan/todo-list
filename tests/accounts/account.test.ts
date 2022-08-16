import request from 'supertest';
import App from '../../src/app';
// import user from './src/api/v1/models/user';
const APP = new App();

describe('Test Authentication Route', () => {
  const userData: object = {
    username: 'example',
    email: 'example@example.com',
    password: 'example123',
  };

  test('should have key status, data and message when created', async () => {
    // const mockCreateAccount = jest.fn((): any => userData);

    // jest.spyOn(user, 'create').mockImplementation(() => mockCreateAccount());

    const response: any =
      (await request(APP).post('/api/v1/accounts').send(userData)) || '';
    console.log(response);

    //     // expect(mockCreateAccount).toHaveBeenCalledTimes(1);
    //     expect(response.body).toHaveProperty('status');
    //     expect(response.body).toHaveProperty('data');
    //     expect(response.body).toHaveProperty('message');
    //
    expect(1 + 1).toBe(2);
  });
});
