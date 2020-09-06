import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
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
    }
  },
  { timestamps: true }
);

// export type IProductModel = Model<IProduct>;
export type IProductModel = Model<IProduct>;

export default mongoose.model<IProduct, IProductModel>(
  'Product',
  productSchema
);
