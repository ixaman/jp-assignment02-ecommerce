import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import httpStatusCode from 'http-status';

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.handleCreateProduct(req.body);

    res.status(httpStatusCode.CREATED).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatusCode.NO_CONTENT).json({
      success: false,
      message: error.message || 'Failed to create product!',
      data: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.handleGetAllProducts();

    res.status(httpStatusCode.OK).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      success: false,
      message: error.message || 'Failed to fetch products!',
      data: error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.handleGetSingleProduct(productId);

    res.status(httpStatusCode.OK).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      success: false,
      message: error.message || 'Failed to fetch product!',
      data: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
