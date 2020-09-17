import ProductModel from '@/lib/Product/models/product';
import connect from '@/utils/mockServerConnection';

connect(ProductModel);

describe('Product Model Test', () => {
  it('create & save product successfully', async () => {
    const productData = {
      name: 'Chocolate Cookies',
      price: 220,
      category: 'cookie'
    };
    const validProduct = new ProductModel(productData);
    const savedProduct = await validProduct.save();

    expect(savedProduct._id).toBeDefined();
    expect(await ProductModel.findById(savedProduct._id).exec()).toEqual(
      expect.objectContaining(productData)
    );
  });

  it('insert product successfully, but the field does not defined in schema should be undefined', async () => {
    const productWithInvalidField: any = new ProductModel({
      name: 'Vallina Cookies',
      price: '190',
      category: 'cookie',
      plus: 'Hey you!'
    });
    const savedProductWithInvalidField = await productWithInvalidField.save();
    expect(savedProductWithInvalidField._id).toBeDefined();
    expect(savedProductWithInvalidField.plus).toBeUndefined();
  });

  it('create product without required field should failed', async () => {
    const productWithoutRequiredField = new ProductModel({
      name: 'Banana Cake'
    });
    let err;
    try {
      await productWithoutRequiredField.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(Error);
  });
});
