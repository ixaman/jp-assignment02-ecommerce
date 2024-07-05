/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import httpStatusCode from 'http-status';

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.handleCreateOrder(req.body);

    res.status(httpStatusCode.CREATED).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(httpStatusCode.NOT_FOUND).json({
      success: false,
      message: err.message || 'Failed to create order!',
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.handleGetAllOrders(req.query);

    res.status(httpStatusCode.CREATED).json({
      success: true,
      message: req?.query?.email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(httpStatusCode.NOT_FOUND).json({
      success: false,
      message: err.message || 'Failed to fetch orders!',
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
