import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import { Product, ServiceResponse } from '../types'
import { getProductsService } from '../services/getProductsService'
import { getProductService } from '../services'

/**
 * @desc  Get all products
 * @route GET /api/v1/products
 * @acess public
 */
export const getProducts = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const { data, statusCode }: ServiceResponse<Product[]> =
      await getProductsService()

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Get single product
 * @route GET /api/v1/products/:id
 * @acess public
 */
export const getProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, statusCode, error }: ServiceResponse<Product> =
      await getProductService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)
