import sinon from 'sinon';
import { IProduct } from '@/lib/Product/models/Product';
import ProductService from '@/lib/Product/services/ProductService';
import ProductModel from '@/lib/Product/models/Product';
import connect from '@/utils/mockServerConnection';

connect(ProductModel);
describe('Product Server testing...', () => {
  it('should insert a doc into collection', async () => {
    const mockProduct = { name: 'Strewberry pie', price: 300 };
    await ProductService.create(mockProduct as IProduct);

    const insertedUser = await ProductModel.findOne({ name: 'Strewberry pie' });
    expect(insertedUser).toEqual(expect.objectContaining(mockProduct));
  });
});
