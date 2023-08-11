import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import products from '../data'
import { Product } from '../types'

/**
 * @desc  Get all products
 * @route GET /api/v1/products
 * @acess public
 */
export const getProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data: Product[] = products
    res.status(200).json(data)
  }
)

/**
 * @desc  Get single product
 * @route GET /api/v1/products/:id
 * @acess public
 */
export const getProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const foundProduct: Product | undefined = products.find(
      (product) => product._id === req.params.id
    )

    res.status(200).json(foundProduct)
  }
)
