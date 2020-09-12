import sinon from 'sinon';
import request from 'supertest';
import app from '@/app';
import { ProductRepository } from '@/lib/Product/services/ProductService';
import ProductModel, {
  IProductModel,
  IProduct
} from '@/lib/Product/models/Product';
import ProductServie from '@/lib/Product/services/ProductService';
import * as ProductCtrl from '@/lib/Product/controllers';
const mockData = {
  name: 'Chocolate Cookies',
  price: 220
};
describe('Product Controller testing...', () => {
  it.skip('should call the service.create with args', async (done) => {
    const mock = sinon.mock(ProductServie);
    mock.expects('create').once().withExactArgs(mockData);
    await request(app).post('/products').send(mockData);
    mock.verify();
    mock.restore();
    done();
  });
  it('should send error', async (done) => {
    const mock = sinon.mock(ProductServie);
    mock.expects('create').once().withExactArgs(mockData).rejects();
    await request(app).post('/products').send(mockData);
    mock.verify();
    mock.restore();
    done();
  });
});
