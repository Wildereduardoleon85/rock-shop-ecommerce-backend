import { Request } from 'express'
import { OrderModel } from '../../models'
import { ServiceResponse } from '../../types'

export async function updateOrderToDeliveredService(
  req: Request
): Promise<ServiceResponse> {
  const updatedOrder = await OrderModel.findOneAndUpdate(
    { _id: req.params.id },
    { isDelivered: true, deliveredAt: Date.now() },
    { new: true }
  )

  if (updatedOrder) {
    return {
      data: updatedOrder,
      error: null,
      statusCode: 200,
    }
  }

  return {
    error: `order with id ${req.params.id} not found`,
    statusCode: 404,
  }
}
