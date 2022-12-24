import request from 'supertest';
import app from '../../../index';

// describe untuk mengelompokkan beberapa test
describe('Tasks Module', () => {
  describe('POST /tasks', () => {
    it('should return success if using valid data', async () => {
      await request(app)
        .post('/api/v1/accounts/register')
        .send({
          username: 'hutamatr',
          email: 'hutamaa@gmail.com',
          password: 'Hutama1a23',
        })
        .expect('Content-Type', /json/)
        .expect(201);
    });
    it('should return bad request (400) if using invalid data', async () => {
      await request(app)
        .post('/tasks')
        .send({})
        .expect('Content-Type', /json/)
        .expect(400);
    });
  });
});
