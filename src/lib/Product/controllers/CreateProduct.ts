import { BaseController } from '@/utils/BaseController';
import ProductService from '@/lib/Product/services/ProductService';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

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
      if (err instanceof mongoose.Error.ValidationError) {
        return this.clientError(res, err.toString());
      }
      return this.fail(res, err.toString());
    }
  }
}
