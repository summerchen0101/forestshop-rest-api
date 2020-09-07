import express from 'express';
import { RetriveUserController } from '@/controllers/ProductController';

const router = express.Router();
router.get('/', (req, res) => new RetriveUserController().execute(req, res));
// router.post('/', ProductController.createProduct);
// router.put('/:id', ProductController.updateProduct);
// router.delete('/:id', ProductController.delProduct);

export default router;
