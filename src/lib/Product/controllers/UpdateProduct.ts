import { BaseController } from '@/utils/BaseController';
import ProductService from '@/lib/Product/services/ProductService';
import { Request, Response } from 'express';
import ProductModel from '@/lib/Product/models/Product';

export class UpdateProductController extends BaseController<
  typeof ProductModel
> {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const product = req.body;
      const result = await ProductService.update(req.params.id, product);
      if (result === null) {
        return this.clientError(res, 'No such Element');
      }
      return this.ok(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
