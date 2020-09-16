import { BaseController } from '@/utils/BaseController';
import ProductModel from '@/lib/Product/models/product';
import { Request, Response } from 'express';

export class RetriveProductsController extends BaseController<
  typeof ProductModel
> {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const result = await this.model.find();
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
