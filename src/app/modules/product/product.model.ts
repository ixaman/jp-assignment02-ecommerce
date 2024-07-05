import { Schema, model } from 'mongoose';
import {
  ProductModel,
  TInventory,
  TProduct,
  TVariant,
} from './product.interface';

const variantsSchema = new Schema<TVariant>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const inventorySchema = new Schema<TInventory>(
  {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const productSchema = new Schema<TProduct, ProductModel>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  variants: [variantsSchema],
  inventory: inventorySchema,
});

productSchema.statics.isProductExist = async (id: string) => {
  const existingProduct = await Product.findById(id);
  return existingProduct;
};

export const Product = model<TProduct, ProductModel>('Product', productSchema);
