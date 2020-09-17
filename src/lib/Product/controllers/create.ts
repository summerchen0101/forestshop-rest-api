import { BaseController } from '@/utils/BaseController';
import { Request, Response } from 'express';
import { ValidateError } from '@/utils/CustomValidation';
import ProductModel from '@/lib/Product/models/product';
export class CreateProductController extends BaseController {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const doc = new ProductModel(req.body);
      await doc.save();
      return this.ok(res, { ok: true });
    } catch (err) {
      if (err instanceof ValidateError) {
        return this.validateError(res, err.code, err.message);
      }
      return this.fail(res, err);
    }
  }
}
