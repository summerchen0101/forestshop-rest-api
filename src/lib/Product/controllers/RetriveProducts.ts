import { BaseController } from '@/utils/BaseController';
import ProductService from '@/lib/Product/services/ProductService';
import { Request, Response } from 'express';
import ProductModel from '@/lib/Product/models/Product';

export class RetriveProductsController extends BaseController<
  typeof ProductModel
> {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const result = await ProductService.getList();
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
