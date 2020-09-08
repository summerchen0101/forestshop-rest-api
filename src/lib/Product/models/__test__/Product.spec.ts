import mongoose from 'mongoose';
import ProductModel from '../Product';

const productData = {
  name: 'Chocolate Cookies',
  price: 220,
  ingredient: [{ name: 'chocolate', amount: '30g' }]
};

describe('Product Model Test', () => {
  // It's just so easy to connect to the MongoDB Memory Server
  // By using mongoose.connect
  beforeAll(async () => {
    await mongoose.connect(
      process.env.MOCK_DATABASE_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  it('create & save product successfully', async () => {
    const validProduct = new ProductModel(productData);
    const savedProduct = await validProduct.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedProduct._id).toBeDefined();
    // expect(savedProduct.name).toBe(productData.name);
  });

  // Test Schema is working!!!
  // You shouldn't be able to add in any field that isn't defined in the schema
  it('insert product successfully, but the field does not defined in schema should be undefined', async () => {
    const productWithInvalidField = new ProductModel({
      name: 'Vallina Cookies',
      price: '190',
      desc: 'Hey you!'
    });
    const savedProductWithInvalidField = await productWithInvalidField.save();
    expect(savedProductWithInvalidField._id).toBeDefined();
  });

  // Test Validation is working!!!
  // It should us told us the errors in on gender field.
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
