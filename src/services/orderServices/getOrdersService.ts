import { OrderModel } from '../../models'
import { ServiceResponse } from '../../types'

export async function getOrdersService(): Promise<ServiceResponse> {
  const orders = await OrderModel.find({}).populate('user', 'id name')

  return {
    data: orders,
    error: null,
    statusCode: 200,
  }
}
