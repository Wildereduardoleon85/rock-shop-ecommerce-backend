import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import { OrderModel } from '../models'
import { AuthRequest, User } from '../types'
import { addOrderItemsService, getOrderByIdService } from '../services'

/**
 * @desc  Create new order
 * @route POST /api/v1/orders
 * @acess Private
 */
export const addOrderItems = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {
    const { data, error, statusCode } = await addOrderItemsService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Get logged in user orders
 * @route GET /api/v1/orders/my-orders
 * @acess Private
 */
export const getMyOrders = asyncHandler(
  async (req: AuthRequest, res: Response): Promise<void> => {
    const user = req.user as User
    const myOrders = await OrderModel.find({ user: user._id })
    res.status(200).json(myOrders)
  }
)

/**
 * @desc  Get order by id
 * @route GET /api/v1/orders/:id
 * @acess Private
 */
export const getOrderById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode } = await getOrderByIdService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
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
