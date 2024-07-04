import { TProduct } from './product.interface';
import { Product } from './product.model';

const handleCreateProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const handleGetAllProducts = async () => {
  const result = await Product.find();

  return result;
};

const handleGetSingleProduct = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

const handleUpdateProduct = async (
  id: string,
  productData: Partial<TProduct>
) => {
  const result = Product.findByIdAndUpdate(id, productData, {
    new: true,
    upsert: true,
    runValidators: true,
  });

  return result;
};

export const ProductServices = {
  handleCreateProduct,
  handleGetAllProducts,
  handleGetSingleProduct,
  handleUpdateProduct,
};
