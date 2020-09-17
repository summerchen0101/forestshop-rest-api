import { CreateProductController } from './create';
import { RetriveProductsController } from './retrive';
import { UpdateProductController } from './update';
import { RemoveProductController } from './remove';

export const createProductCtrl = new CreateProductController();
export const retriveProductsCtrl = new RetriveProductsController();
export const updateProductCtrl = new UpdateProductController();
export const removeProductCtrl = new RemoveProductController();
