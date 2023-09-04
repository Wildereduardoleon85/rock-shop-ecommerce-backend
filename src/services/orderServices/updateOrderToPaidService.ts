import { Request } from 'express'
import { ServiceResponse } from '../../types'
import { OrderModel } from '../../models'

export async function updateOrderToPaidService(
  req: Request
): Promise<ServiceResponse> {
  const updatedOrder = await OrderModel.findOneAndUpdate(
    { _id: req.params.id },
    { isPaid: true, paidAt: Date.now() },
    { new: true }
  )

  return {
    data: updatedOrder,
    error: null,
    statusCode: 200,
  }
}
