/* eslint-disable @typescript-eslint/no-explicit-any */
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
    res.status(httpStatusCode.NOT_FOUND).json({
      success: false,
      message: error.message || 'Failed to create product!',
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.handleUpdateProduct(
      productId,
      req.body
    );

    res.status(httpStatusCode.OK).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Failed to update product!',
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.handleDeleteProduct(productId);

    res.status(httpStatusCode.OK).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || 'Failed to delete product!',
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.handleGetAllProducts(req.query);

    res.status(httpStatusCode.OK).json({
      success: true,
      message: req?.query?.searchTerm
        ? `Products matching search term '${req?.query?.searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      success: false,
      message: error.message || 'Failed to fetch products!',
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.handleGetSingleProduct(productId);
    if (!result) {
      throw new Error('Product not found!');
    }

    res.status(httpStatusCode.OK).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatusCode.BAD_REQUEST).json({
      success: false,
      message: error.message || 'Failed to fetch product!',
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
