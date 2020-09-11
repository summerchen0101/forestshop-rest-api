import sinon, { mock } from 'sinon';
import { ProductRepository } from '@/lib/Product/services/ProductService';
import ProductModel, {
  IProductModel,
  IProduct
} from '@/lib/Product/models/Product';
import ProductServie from '@/lib/Product/services/ProductService';

describe.skip('Product Server testing...', () => {
  it('should insert a doc into collection', async (done) => {
    const mockProduct = { name: 'Strewberry pie', price: 300 };
    const mockModel = sinon.mock(ProductServie.model);
    mockModel.expects('create').once().withExactArgs(mockProduct);
    ProductServie.create(mockProduct as IProduct);
    mockModel.restore();
    mockModel.verify();
    done();
  });
});
