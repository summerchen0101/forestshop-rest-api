import { BaseController } from '@/utils/BaseController';
import ProductService from '@/lib/Product/services/ProductService';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ValidateError } from '@/utils/CustomValidation';
import ProductModel from '@/lib/Product/models/Product';
export class CreateProductController extends BaseController<
  typeof ProductModel
> {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const product = req.body;
      const result = await this.model.create(product);

      return this.ok(res, result);
    } catch (err) {
      if (err instanceof ValidateError) {
        return this.validateError(res, err.code, err.message);
      }
      return this.fail(res, err);
    }
  }
}
