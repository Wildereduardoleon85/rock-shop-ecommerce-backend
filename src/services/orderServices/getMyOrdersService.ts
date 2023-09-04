import { OrderModel } from '../../models'
import { AuthRequest, ServiceResponse, User } from '../../types'

export async function getMyOrdersService(
  req: AuthRequest
): Promise<ServiceResponse> {
  const user = req.user as User

  const myOrders = await OrderModel.find({
    user: user._id,
  })

  return {
    data: myOrders,
    error: null,
    statusCode: 200,
  }
}
