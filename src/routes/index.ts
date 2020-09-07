import express from 'express';
import products from '../lib/Product/route';

const router = express.Router();

router.use(express.json());

router.use('/products', products);

export default router;
