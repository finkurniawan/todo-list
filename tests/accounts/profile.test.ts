import request from 'supertest';
import App from '../../src/app';

const { APP } = new App();

describe('Profile Testing', () => {
  const DataNew = [
    // {
    //   value: {
    //     full_name: 'example full name 1',
    //     email: 'example1@gmail.com',
    //     password: 'examplepassword1',
    //   },
    //   expectedValue: {
    //     status: true,
    //     data: {},
    //     message: 'Profile updated successfully',
    //     errors: {},
    //   },
    // },
    // {
    //   value: {
    //     full_name: 'example full name 1',
    //     username: 'example username',
    //     email: 'example3@gmail.com',
    //     password: 'examplepassword1',
    //   },
    //   expectedValue: {
    //     status: false,
    //     data: {},
    //     message: 'Profile not updated',
    //     errors: {
    //       email: 'Email already exists',
    //     },
    //   },
    // },
    {
      value: {
        full_name: 'example full name 2',
        username: 'aaaa',
        email: 'example2@gmail.com',
        password: 'pass2',
      },
      expectedValue: {
        status: false,
        data: {},
        message: 'Profile not updated',
        errors: {
          password: 'Password must be at least 8 characters',
        },
      },
    },
    // {
    //   value: {
    //     full_name: 'example full name 2',
    //     email: 'example2@gmail',
    //     password: 'pass2',
    //   },
    //   expectedValue: {
    //     status: false,
    //     data: {},
    //     message: 'Profile not updated',
    //     errors: {
    //       email: 'this is not a valid email',
    //     },
    //   },
    // },
  ];

  test('should have key status, data and message when created', async () => {
    const response: any = await request(APP)
      .post('/api/v1/accounts/register')
      .send({
        full_name: 'example full name 1',
        username: 'example 1',
        email: 'example3@gmail.com',
        password: 'example1',
      });
    // console.log(value, 'created account');

    const { body } = response;
    expect(body).toHaveProperty('status');
    expect(body).toHaveProperty('data');
    expect(body).toHaveProperty('message');
    expect(body).toEqual({
      status: true,
      data: {},
      message: 'Account created successfully',
    });
  });
  test.each(DataNew)(
    'Should have key status,data and message when created',
    async ({ value, expectedValue }) => {
      const response = await request(APP)
        .put('/api/v1/accounts/profile')
        .send(value);

      const { body } = response;
      // console.log(value, 'value', expectedValue, 'expectValue');
      expect(body).toHaveProperty('status');
      expect(body).toHaveProperty('data');
      expect(body).toHaveProperty('message');
      expect(body).toEqual(expectedValue);
    }
  );
  //   test('Should update profile error', async () => {
  //     const response = await request(APP)
  //       .put('/api/v1/accounts/profile')
  //       .send(value);

  //     const { body } = response;

  //     expect(body).toHaveProperty('status');
  //     expect(body).toHaveProperty('data');
  //     expect(body).toHaveProperty('message');
  //     expect(body).toEqual({
  //       status: false,
  //       data: {},
  //       message: 'Profile not updated',
  //     });
  //   });
});
