import sinon from 'sinon';
import request from 'supertest';
import app from '@/app';
import ProductModel from '@/lib/Product/models/product';
import connect from '@/utils/mockServerConnection';

connect(ProductModel);
const mockData = {
  name: 'Chocolate Cookies',
  price: 220,
  category: 'cookie'
};
describe('Product Controller testing...', () => {
  it.skip('should call the service.create with args', async (done) => {
    const spy = sinon.spy({ model: ProductModel }, 'model');
    await request(app).post('/products').send(mockData);
    expect(spy.calledWithNew).toBeTruthy();
    expect(spy.withArgs(mockData)).toBeTruthy();
    spy.restore();
    done();
  });
});
