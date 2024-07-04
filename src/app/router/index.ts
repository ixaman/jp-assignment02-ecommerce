import { Router } from 'express';
import { ProductsRoute } from '../config/modules/product/product.route';

const router = Router();

const applicationRoutes = [{ path: '/products', route: ProductsRoute }];

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
