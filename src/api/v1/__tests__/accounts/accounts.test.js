import request from 'supertest';
import app from '../../../../index';

const domain = '/api/v1';
describe('accounts testing', () => {
  describe('register', () => {
    // test.todo("login account");
    it('register account', async () => {
      const result = await request(app)
        .post(`${domain}/accounts/register`)
        .send({
          username: `${+new Date()}`,
          email: `${+new Date()}+ "@example.com"`,
          password: `
    ${+new Date()}`,
        })
        .expect('Content-type', 'application/json; charset=utf-8')
        .expect(201);
    });
    test.todo('login account username not valid');
    test.todo('password not valid');
    test.todo('username not valid structure');
    test.todo('password not valid structure');
    test.todo('username over limit');
    test.todo('password over limit chracter');
    test.todo('structure token');
    test.todo('multi login one account');
  });
  describe('login', () => {
    test.todo('login account');
    test.todo('login account username not valid');
    test.todo('password not valid');
    test.todo('username not valid structure');
    test.todo('password not valid structure');
    test.todo('username over limit');
    test.todo('password over limit chracter');
    test.todo('structure token');
    test.todo('multi login one account');
  });
});
