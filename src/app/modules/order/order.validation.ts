import { z } from 'zod';
const createOrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const OrderValidations = {
  createOrderValidationSchema,
};
