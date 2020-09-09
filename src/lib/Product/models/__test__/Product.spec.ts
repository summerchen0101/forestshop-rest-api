import mongoose from 'mongoose';
import ProductModel from '../Product';
import connect from '@/utils/mockServerConnection';

connect(ProductModel);

describe('Product Model Test', () => {
  it('create & save product successfully', async () => {
    const productData = {
      name: 'Chocolate Cookies',
      price: 220,
      ingredients: [
        { name: 'chocolate', amount: '30g' },
        { name: 'flour', amount: '100g' }
      ]
    };
    const validProduct = new ProductModel(productData);
    const savedProduct = await validProduct.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(productData.name);
    expect(savedProduct.price).toBe(productData.price);
    expect(savedProduct.ingredients).toHaveLength(2);
    expect(savedProduct.ingredients).toEqual(
      expect.arrayContaining([
        expect.objectContaining(productData.ingredients[0]),
        expect.objectContaining(productData.ingredients[1])
      ])
    );
  });

  it('insert product successfully, but the field does not defined in schema should be undefined', async () => {
    const productWithInvalidField: any = new ProductModel({
      name: 'Vallina Cookies',
      price: '190',
      desc: 'Hey you!'
    });
    const savedProductWithInvalidField = await productWithInvalidField.save();
    expect(savedProductWithInvalidField._id).toBeDefined();
    expect(savedProductWithInvalidField.desc).toBeUndefined();
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
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.price).toBeDefined();
  });
});
