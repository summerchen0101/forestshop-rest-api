import { Document, Model } from 'mongoose';
export interface IProduct extends Document {
    name: string;
    price: number;
}
export declare type IProductModel = Model<IProduct>;
declare const _default: IProductModel;
export default _default;
//# sourceMappingURL=Product.d.ts.map