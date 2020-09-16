import { BaseController } from '@/utils/BaseController';
import { Request, Response } from 'express';
import ProductModel from '@/lib/Product/models/product';

export class UpdateProductController extends BaseController<
  typeof ProductModel
> {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const doc = req.body;
      const result = await this.model.findByIdAndUpdate(req.params.id, doc);
      if (result === null) {
        return this.clientError(res, 'No such Element');
      }
      return this.ok(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
