import { CreateProductController } from './CreateProduct';
import { RetriveProductsController } from './RetriveProducts';
import { UpdateProductController } from './UpdateProduct';
import { RemoveProductController } from './RemoveProduct';
import ProductModel from '@/lib/Product/models/Product';

export const createProductCtrl = new CreateProductController(ProductModel);
export const retriveProductsCtrl = new RetriveProductsController(ProductModel);
export const updateProductCtrl = new UpdateProductController(ProductModel);
export const removeProductCtrl = new RemoveProductController(ProductModel);
