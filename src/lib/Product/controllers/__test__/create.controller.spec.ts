import sinon from 'sinon';
import request from 'supertest';
import app from '@/app';
// import { CreateProductController } from '../create';
import ProductModel from '@/lib/Product/models/product';
const mockData = {
  name: 'Chocolate Cookies',
  price: 220
};
describe('Product Controller testing...', () => {
  it('should call the service.create with args', async (done) => {
    const mock = sinon.mock(ProductModel);
    mock.expects('create').once().withExactArgs(mockData);
    await request(app).post('/products').send(mockData);
    mock.verify();
    mock.restore();
    done();
  });
  it('When api reject should send error', async (done) => {
    const mock = sinon.mock(ProductModel);
    mock.expects('create').once().withExactArgs(mockData).rejects();
    await request(app).post('/products').send(mockData);
    mock.verify();
    mock.restore();
    done();
  });
});
