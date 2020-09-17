import mongoose, { Document, Schema } from 'mongoose';

enum Category {
  cake = 'cake',
  cookie = 'cookie'
}

interface IProduct extends Document {
  name: string;
  price: number;
  desc: string;
  category: Category;
}

const Product: Schema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    desc: {
      type: String
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true,
      enum: Object.values(Category)
    }
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>('Product', Product);
