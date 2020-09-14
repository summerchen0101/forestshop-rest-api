import { Document, Schema } from 'mongoose';
import Ingredient, { IIngredient } from './Ingredient';

export interface IProduct extends Document {
  name: string;
  price: number;
  ingredients?: IIngredient[];
}

export default new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    price: {
      type: Number,
      required: [true, 'price field is required!'],
      validate: {
        validator: function (v: any) {
          return v < 300;
        },
        message: (props) => `${props.path} should lower than 300!`
      }
    },
    ingredients: [Ingredient]
  },
  { timestamps: true }
);
