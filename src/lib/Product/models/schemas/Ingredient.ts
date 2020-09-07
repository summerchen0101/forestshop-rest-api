import { Document, Schema } from 'mongoose';

export interface IIngredient extends Document {
  name: string;
  amount?: string;
}

export default new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    amount: {
      type: String
    }
  },
  { _id: false }
);
