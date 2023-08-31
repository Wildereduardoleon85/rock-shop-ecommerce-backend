import { Request } from 'express'
import { ServiceResponse } from '../../types'
import { OrderModel } from '../../models'

export async function updateOrderToPaidService(
  req: Request
): Promise<ServiceResponse<any>> {
  try {
    const order = await OrderModel.findById(req.params.id)

    if (order) {
      order.isPaid = true
      order.paidAt = new Date(Date.now())

      const updatedOrder = await order.save()

      return {
        data: updatedOrder,
        error: null,
        statusCode: 200,
      }
    }

    return {
      error: 'something went wrong',
      statusCode: 500,
    }
  } catch (err: any) {
    console.log(err)
    return {
      error: err,
      statusCode: 404,
    }
  }
}
