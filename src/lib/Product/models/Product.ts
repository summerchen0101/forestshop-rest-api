import mongoose, { Document, Model, HookNextFunction } from 'mongoose';
import { MongoError } from 'mongodb';
import Product, { IProduct } from './schemas/Product';
import { DupicateError } from '@/utils/CustomValidation';

Product.post('save', function (
  error: MongoError,
  doc: Document,
  next: HookNextFunction
) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new DupicateError());
  } else {
    next();
  }
});

export type IProductModel = Model<IProduct>;

export default mongoose.model<IProduct, IProductModel>('Product', Product);
