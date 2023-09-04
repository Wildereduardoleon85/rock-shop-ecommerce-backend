import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import { AuthRequest } from '../types'
import {
  addOrderItemsService,
  getOrderByIdService,
  updateOrderToPaidService,
  getMyOrdersService,
  getOrdersService,
  updateOrderToDeliveredService,
} from '../services'

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
    const { data, error, statusCode } = await getMyOrdersService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
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
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode } = await updateOrderToPaidService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Update order to delivered
 * @route PUT /api/v1/orders/:id/deliver
 * @acess Private/Admin
 */
export const updateOrderToDelivered = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode } = await updateOrderToDeliveredService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Get all orders
 * @route GET /api/v1/orders
 * @acess Private/Admin
 */
export const getOrders = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode } = await getOrdersService()

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)
