import mongoose, { Document, Schema, Model } from 'mongoose';
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
      required: true
    },
    ingredients: [Ingredient]
  },
  { timestamps: true }
);

// export type IProductModel = Model<IProduct>;
export type IProductModel = Model<IProduct>;

export default mongoose.model<IProduct, IProductModel>(
  'Product',
  productSchema
);
