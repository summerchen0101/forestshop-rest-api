import mongoose, { Document, Model, HookNextFunction } from 'mongoose';
import { MongoError } from 'mongodb';
import Product, { IProduct } from './schemas/Product';

Product.post('save', function (
  error: MongoError,
  doc: Document,
  next: HookNextFunction
) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next();
  }
});

export type IProductModel = Model<IProduct>;

export default mongoose.model<IProduct, IProductModel>('Product', Product);
