import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import {
  getProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
} from '../services'
import { AuthRequest } from '../types'

/**
 * @desc  Get all products
 * @route GET /api/v1/products
 * @acess Public
 */
export const getProducts = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const { data, statusCode } = await getProductsService()

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Get single product
 * @route GET /api/v1/products/:id
 * @acess Public
 */
export const getProductById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, statusCode, error } = await getProductByIdService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Create product
 * @route POST /api/v1/products
 * @acess Private/Admin
 */
export const createProduct = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {
    const { data, statusCode, error } = await createProductService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Update product
 * @route PUT /api/v1/products/:id
 * @acess Private/Admin
 */
export const updateProduct = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {
    const { data, statusCode, error } = await updateProductService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)
