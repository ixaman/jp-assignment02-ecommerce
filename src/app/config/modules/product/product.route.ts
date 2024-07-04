import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductControllers.createProduct
);

export const ProductsRoute = router;
