import sinon from 'sinon';
import ProductModel from '@/lib/Product/models/Product';
import { IProduct } from '@/lib/Product/models/schemas/Product';
import ProductServie from '@/lib/Product/services/ProductService';

describe('Product Server testing...', () => {
  it('should call modal.create once', (done) => {
    const mockProduct = { name: 'Apple pie', price: 100 };
    const mockModel = sinon.mock(ProductModel);
    mockModel.expects('create').once();
    ProductServie.create(mockProduct as IProduct);
    mockModel.restore();
    mockModel.verify();
    done();
  });

  it('should uppercase the name field', (done) => {
    const mockProduct = { name: 'Apple pie', price: 100 };
    const mockModel = sinon.mock(ProductModel);
    mockModel
      .expects('create')
      .once()
      .withExactArgs(mockProduct)
      .resolves(mockProduct);
    ProductServie.create(mockProduct as IProduct).then((result) => {
      expect(result).toEqual({ name: 'APPLE PIE', price: 100 });
      mockModel.restore();
      mockModel.verify();
      done();
    });
  });
});
