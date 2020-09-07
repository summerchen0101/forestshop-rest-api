import ProductRepository from '../models/repositories/ProductRepository';
import createError from 'http-errors';
import { Request, Response } from 'express';
// import errCodes from '../errors/codes.json'

// CREATE
function createProduct(req: Request, res: Response): void {
  const product = req.body;

  ProductRepository.create(product)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(createError(406));
    });
}

// RETRIVE
function getProducts(req: Request, res: Response): void {
  ProductRepository.getList()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(createError(406));
    });
}

// UPDATE
async function updateProduct(req: Request, res: Response): Promise<void> {
  const product = req.body;
  try {
    const result = await ProductRepository.update(req.params.id, product);
    res.json({ result: { ...result?.toObject(), ...product }, success: true });
  } catch (err) {
    res.json(createError(406));
  }
}
// DELETE
function delProduct(req: Request, res: Response): void {
  ProductRepository.remove(req.params.id)
    .then((result) => {
      if (result === null) {
        return res.json(createError(406));
      }
      res.json(result);
    })
    .catch((err) => {
      res.json(createError(406));
    });
}

function sum(a: number, b: number): number {
  return a + b;
}

export default {
  createProduct,
  updateProduct,
  getProducts,
  delProduct,
  sum
};
