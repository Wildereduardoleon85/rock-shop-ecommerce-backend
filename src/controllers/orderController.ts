import { Response } from 'express'
import { asyncHandler } from '../middlewares'

/**
 * @desc  Create new order
 * @route POST /api/v1/orders
 * @acess Private
 */
export const addOrderItems = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('add order items')
  }
)

/**
 * @desc  Get logged in user orders
 * @route GET /api/v1/orders/my-orders
 * @acess Private
 */
export const getMyOrders = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('get my orders')
  }
)

/**
 * @desc  Get order by id
 * @route GET /api/v1/orders/:id
 * @acess Private/Admin
 */
export const getOrderById = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('get order by id')
  }
)

/**
 * @desc  Update order to paid
 * @route PUT /api/v1/orders/:id/pay
 * @acess Private
 */
export const updateOrderToPaid = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('update order to paid')
  }
)

/**
 * @desc  Update order to delivered
 * @route PUT /api/v1/orders/:id/deliver
 * @acess Private/Admin
 */
export const updateOrderToDelivered = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('update order to delivered')
  }
)

/**
 * @desc  Get all orders
 * @route GET /api/v1/orders
 * @acess Private/Admin
 */
export const getOrders = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('get all orders')
  }
)
