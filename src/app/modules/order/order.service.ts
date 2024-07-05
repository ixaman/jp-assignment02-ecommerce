import { TOrder } from './order.interface';
import { Order } from './order.model';

const handleCreateOrder = async (orderData: TOrder) => {
  const result = await Order.create(orderData);

  return result;
};

const handleGetAllOrders = async (query: Record<string, unknown>) => {
  let result;

  if (query.email) {
    result = await Order.find({ email: query.email });
  } else {
    result = await Order.find();
  }

  return result;
};

export const OrderServices = {
  handleCreateOrder,
  handleGetAllOrders,
};
