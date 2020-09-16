import { BaseController } from '@/utils/BaseController';
import ProductService from '@/lib/Product/services/ProductService';
import { Request, Response } from 'express';
import ProductModel from '@/lib/Product/models/Product';

export class RemoveProductController extends BaseController<
  typeof ProductModel
> {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const result = await ProductService.remove(req.params.id);
      if (result === null) {
        return this.clientError(res, 'No such Element');
      }
      return this.ok(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
