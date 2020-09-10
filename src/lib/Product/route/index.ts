import express from 'express';
import {
  createProductCtrl,
  retriveProductsCtrl,
  updateProductCtrl,
  removeProductCtrl
} from '@/lib/Product/controllers';

const router = express.Router();
router.get('/', (req, res) => retriveProductsCtrl.execute(req, res));
router.post('/', (req, res) => createProductCtrl.execute(req, res));
router.put('/:id', (req, res) => updateProductCtrl.execute(req, res));
router.delete('/:id', (req, res) => removeProductCtrl.execute(req, res));

export default router;
