import mongoose, { Document, Schema, Model, HookNextFunction } from 'mongoose';
import { MongoError } from 'mongodb';
import Ingredient, { IIngredient } from './schemas/Ingredient';

export interface IProduct extends Document {
  name: string;
  price: number;
  ingredients?: IIngredient[];
}

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    price: {
      type: Number,
      required: [true, 'price field is required!']
    },
    ingredients: [Ingredient]
  },
  { timestamps: true }
);

productSchema.post('save', function (
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

export default mongoose.model<IProduct, IProductModel>(
  'Product',
  productSchema
);
