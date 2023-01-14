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

      console.log(result);
    });

    it('login account username not valid', async () => {
      await request(app)
        .post(`${domain}/accounts/register`)
        .send({
          username:
            'jkdfjkkjdkdjsffsdjkfsdjksdfjkldsfjkldsfjkldfsjklfsdjklsdfjkl555555fkdjfdjk',
          email: `${+new Date()}+ "@example.com"`,
          password: `
    ${+new Date()}`,
        })
        .expect('Content-type', 'application/json; charset=utf-8')
        .expect(400);
    });
    test.todo('password not valid');
    it('password not valid', async () => {
      await request(app)
        .post(`${domain}/accounts/register`)
        .send({
          username: `${+new Date()}`,
          email: `${+new Date()}+ "@example.com"`,
          password: '',
        })
        .expect('Content-type', 'application/json; charset=utf-8')
        .expect(400);
    });

    it('username not valid structure', async () => {
      await request(app)
        .post(`${domain}/accounts/register`)
        .send({
          username: `${+new Date()}@@@@@@@@@@@@$$%%%^&`,
          email: `${+new Date()}+ "@example.com"`,
          password: `
    ${+new Date()}`,
        })
        .expect('Content-type', 'application/json; charset=utf-8')
        .expect(400);
    });

    it('password not valid structure', async () => {
      await request(app)
        .post(`${domain}/accounts/register`)
        .send({
          username: `${+new Date()}`,
          email: `${+new Date()}+ "@example.com"`,
          password: `
    .;.;;;;;';'45*^%$#`,
        })
        .expect('Content-type', 'application/json; charset=utf-8')
        .expect(400);
    });

    it('username over limit', async () => {
      await request(app)
        .post(`${domain}/accounts/register`)
        .send({
          username: `${+new Date()}jkljklfsdfjskfjjfklsjfsfjsfjsdakfjsfjffsfjfkjfsfsjfksdjfj`,
          email: `${+new Date()}+ "@example.com"`,
          password: `
    ${+new Date()}`,
        })
        .expect('Content-type', 'application/json; charset=utf-8')
        .expect(400);
    });

    it('password over limit chracter', async () => {
      await request(app)
        .post(`${domain}/accounts/register`)
        .send({
          username: `${+new Date()}`,
          email: `${+new Date()}+ "@example.com"`,
          password: `
    ${+new Date()} ${+new Date()}  ${+new Date()}  ${+new Date()}`,
        })
        .expect('Content-type', 'application/json; charset=utf-8')
        .expect(400);
    });

    it('structure token', async () => {
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

      expect(result).toMatch(/Bearer/);
      console.log(result);
    });
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
