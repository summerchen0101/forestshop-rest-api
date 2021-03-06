import request from 'supertest';
import app from '@/app';
import ProductModel from '@/lib/Product/models/product';
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
          price: 280,
          category: 'cookie'
        })
        .expect(200);
    }),
    it('returns 500 if do not contain price or name field', async () => {
      await request(app)
        .post('/products')
        .send({ name: 'strawberry cake' })
        .expect(500);
    });
});
