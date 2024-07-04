import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const createProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string(z.string())),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

const updateProductValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string(z.string())).optional(),
  variants: z.array(variantValidationSchema).optional(),
  inventory: inventoryValidationSchema.optional(),
});

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
