import { BaseController } from './BaseController';
import ProductService from '@/services/ProductService';
// import createError from 'http-errors';
import { Request, Response } from 'express';

export class CreateUserController extends BaseController {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const product = req.body;
      const result = await ProductService.create(product);
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}

export class RetriveUserController extends BaseController {
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

export class UpdateUserController extends BaseController {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const product = req.body;
      await ProductService.update(req.params.id, product);
      return this.ok(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}

export class RemoveUserController extends BaseController {
  protected async executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any> {
    try {
      const result = await ProductService.remove(req.params.id);
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
