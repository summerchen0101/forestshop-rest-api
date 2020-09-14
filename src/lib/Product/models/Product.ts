import mongoose, { Document, Model, HookNextFunction } from 'mongoose';
import { MongoError } from 'mongodb';
import Product, { IProduct } from './schemas/Product';
import { CustomError } from '@/utils/CustomValidation';

Product.post('save', function (
  error: MongoError,
  doc: Document,
  next: HookNextFunction
) {
  console.log(error?.name);
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new CustomError(9110, 'There was a duplicate key error'));
  } else {
    next();
  }
});

export type IProductModel = Model<IProduct>;

export default mongoose.model<IProduct, IProductModel>('Product', Product);
