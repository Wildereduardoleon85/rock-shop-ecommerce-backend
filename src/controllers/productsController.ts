import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import { ProductModel } from '../models'
import { Product } from '../types'

/**
 * @desc  Get all products
 * @route GET /api/v1/products
 * @acess public
 */
export const getProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const products: Product[] = await ProductModel.find()

    res.status(200).json(products)
  }
)

/**
 * @desc  Get single product
 * @route GET /api/v1/products/:id
 * @acess public
 */
export const getProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await ProductModel.findById(req.params.id)

    res.status(200).json(product)
  }
)
