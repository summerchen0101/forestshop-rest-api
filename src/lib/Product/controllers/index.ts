import { CreateProductController } from './CreateProduct';
import { RetriveProductsController } from './RetriveProducts';
import { UpdateProductController } from './UpdateProduct';
import { RemoveProductController } from './RemoveProduct';

export const createProductCtrl = new CreateProductController();
export const retriveProductsCtrl = new RetriveProductsController();
export const updateProductCtrl = new UpdateProductController();
export const removeProductCtrl = new RemoveProductController();
