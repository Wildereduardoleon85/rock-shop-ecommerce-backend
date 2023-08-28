import { Request } from 'express'
import { Document } from 'mongoose'
import { GetOrderByIdResponse, ServiceResponse } from '../../types'
import { OrderModel } from '../../models'

export async function getOrderByIdService(
  req: Request
): Promise<
  ServiceResponse<Document<unknown, {}, GetOrderByIdResponse> | null>
> {
  try {
    const order = await OrderModel.findById(req.params.id).populate(
      'user',
      'name email'
    )

    return {
      data: order,
      error: null,
      statusCode: 200,
    }
  } catch (error) {
    return {
      error: `Order with id ${req.params.id} not found`,
      statusCode: 404,
    }
  }
}
