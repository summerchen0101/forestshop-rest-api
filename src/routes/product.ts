import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();
router.get('/', ProductController.getProducts);
router.post('/', ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.delProduct);

export default router;
