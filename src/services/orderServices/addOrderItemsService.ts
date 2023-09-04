import { OrderModel } from '../../models'
import { AuthRequest, OrderItem, ServiceResponse, User } from '../../types'

export async function addOrderItemsService(
  req: AuthRequest
): Promise<ServiceResponse> {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    paidAt,
  } = req.body

  const user = req.user as User

  try {
    const createdOrder = await OrderModel.create({
      orderItems: orderItems.map((item: OrderItem) => ({
        name: item.name,
        qty: item.qty,
        image: item.image,
        price: item.price,
        product: item.product,
      })),
      user: user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      isPaid,
      paidAt,
    })

    return {
      data: createdOrder,
      error: null,
      statusCode: 200,
    }
  } catch (error: any) {
    return {
      error: error.message,
      statusCode: 400,
    }
  }
}
