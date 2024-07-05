import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidations } from './order.validation';
import { OrderController } from './order.controller';

const router = express.Router();

//ROUTE TO CREATE A NEW ORDER
router.post(
  '/',
  validateRequest(OrderValidations.createOrderValidationSchema),
  OrderController.createOrder
);

//ROUTE TO GET ALL ORDERS
router.get('/', OrderController.getAllOrders);

export const OrderRoutes = router;
