import express from 'express';
import products from '../lib/Product/route';

const router = express.Router();

router.use('/products', products);

export default router;
