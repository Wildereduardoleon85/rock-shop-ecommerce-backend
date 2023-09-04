import { Request } from 'express'
import { ServiceResponse } from '../../types'
import { OrderModel } from '../../models'

export async function getOrderByIdService(
  req: Request
): Promise<ServiceResponse> {
  const order = await OrderModel.findById(req.params.id).populate(
    'user',
    'name email'
  )

  return {
    data: order,
    error: null,
    statusCode: 200,
  }
}
