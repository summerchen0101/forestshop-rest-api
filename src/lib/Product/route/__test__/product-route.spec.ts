import request from 'supertest';
import app from '@/app';
import ProductModel from '@/lib/Product/models/Product';
import connect from '@/utils/mockServerConnection';

connect(ProductModel);

describe('app testing', () => {
  it('GET /products', async () => {
    await request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  }),
    it('POST /products', async () => {
      await request(app)
        .post('/products')
        .send({
          name: 'Herbs Cookies',
          price: 280
        })
        .expect(200);
    }),
    it('returns 400 if do not contain price or name field', async () => {
      await request(app)
        .post('/products')
        .send({ name: 'strawberry cake' })
        .expect(400);
      await request(app).post('/products').send({ price: 100 }).expect(400);
    });
});
