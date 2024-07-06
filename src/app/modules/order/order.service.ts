import mongoose from 'mongoose';
import { TOrder } from './order.interface';
import { Order } from './order.model';
import { Product } from '../product/product.model';

const handleCreateOrder = async (orderData: TOrder) => {
  const productId = orderData.productId;

  const isExist = await Product.isProductExist(productId.toString());
  if (!isExist) {
    throw new Error('Product not found!');
  }

  if (orderData.quantity > isExist.inventory.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  if (isExist.inventory.quantity <= 0) {
    throw new Error('Product is out of stock');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const result = await Order.create([orderData], { session });

    if (!result) {
      throw new Error('Failed to create order!');
    }

    // Decrease product quantity
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $inc: { 'inventory.quantity': -orderData.quantity } },
      { new: true, session }
    );

    if (!updatedProduct) {
      throw new Error('Failed to update product quantity!');
    }

    // Check if quantity is 0 and update inStock accordingly
    if (updatedProduct.inventory.quantity <= 0) {
      await Product.findByIdAndUpdate(
        productId,
        { $set: { 'inventory.inStock': false } },
        { new: true, session }
      );
    }
    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create order!');
  }
};

const handleGetAllOrders = async (query: Record<string, unknown>) => {
  let result;

  if (query.email) {
    result = await Order.find({ email: query.email }).select('-__v -_id');
  } else {
    result = await Order.find().select('-__v -_id');
  }

  return result;
};

export const OrderServices = {
  handleCreateOrder,
  handleGetAllOrders,
};
