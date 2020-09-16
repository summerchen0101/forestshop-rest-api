import { CreateProductController } from './create';
import { RetriveProductsController } from './retrive';
import { UpdateProductController } from './update';
import { RemoveProductController } from './remove';
import ProductModel from '@/lib/Product/models/product';

export const createProductCtrl = new CreateProductController(ProductModel);
export const retriveProductsCtrl = new RetriveProductsController(ProductModel);
export const updateProductCtrl = new UpdateProductController(ProductModel);
export const removeProductCtrl = new RemoveProductController(ProductModel);
