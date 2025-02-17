import { TProduct } from './product.interface';
import { Product } from './product.model';

const handleCreateProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

const handleGetAllProducts = async (query: Record<string, unknown>) => {
  const searchableFields = ['name', 'description', 'category'];
  let searchTerm = '';
  if (query.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  const result = await Product.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  }).select('-__v');

  return result;
};

const handleGetSingleProduct = async (id: string) => {
  const result = await Product.findById(id).select('-_id -__v');

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

const handleDeleteProduct = async (productId: string) => {
  const isExist = await Product.isProductExist(productId);
  if (!isExist) {
    throw new Error('Product not found!');
  }
  const result = await Product.findByIdAndDelete(productId);

  return result;
};

export const ProductServices = {
  handleCreateProduct,
  handleGetAllProducts,
  handleGetSingleProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
