import mongoose, { Document, Model, HookNextFunction } from 'mongoose';
import { MongoError } from 'mongodb';
import Product, { IProduct } from './schemas/Product';
import { DupicateError, RequiredError } from '@/utils/CustomValidation';

Product.pre('validate', function (next) {
  const doc = this as IProduct;
  const requiredPaths = Product.requiredPaths();
  for (const _p of requiredPaths) {
    const path = _p as keyof IProduct;
    if (!doc[path]) next(new RequiredError(`${path} field is required`));
  }
  next();
});
Product.pre('save', function (next) {
  const doc = this as IProduct;
  doc.name = doc.name.toUpperCase();
  next();
});

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
