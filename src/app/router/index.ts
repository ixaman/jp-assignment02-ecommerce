import { Router } from 'express';
import { ProductsRoute } from '../modules/product/product.route';
import { OrderRoutes } from '../modules/order/order.route';

const router = Router();

const applicationRoutes = [
  { path: '/products', route: ProductsRoute },
  { path: '/orders', route: OrderRoutes },
];

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
