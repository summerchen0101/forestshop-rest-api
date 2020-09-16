import { BaseController } from '@/utils/BaseController';
import { Request, Response } from 'express';
import { ValidateError } from '@/utils/CustomValidation';
import ProductModel from '@/lib/Product/models/product';
export class CreateProductController extends BaseController<
  typeof ProductModel
> {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const result = await this.model.create(req.body);
      return this.ok(res, result);
    } catch (err) {
      if (err instanceof ValidateError) {
        return this.validateError(res, err.code, err.message);
      }
      return this.fail(res, err);
    }
  }
}
