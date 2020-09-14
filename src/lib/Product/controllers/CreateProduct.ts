import { BaseController } from '@/utils/BaseController';
import ProductService from '@/lib/Product/services/ProductService';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ValidateError } from '@/utils/CustomValidation';
export class CreateProductController extends BaseController {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const product = req.body;
      const result = await ProductService.create(product);

      return this.ok(res, result);
    } catch (err) {
      if (err instanceof ValidateError) {
        return this.validateError(res, err.code, err.message);
      }
      if (err instanceof mongoose.Error.ValidationError) {
        return this.validateError(res, 50001, err.toString());
      }
      return this.fail(res, err);
    }
  }
}
