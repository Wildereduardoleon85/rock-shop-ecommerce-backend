import { Router } from 'express'
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers'
import { admin, protect } from '../middlewares'

const orderRoutes: Router = Router()

orderRoutes
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders)
orderRoutes.route('/my-orders').get(protect, getMyOrders)
orderRoutes.route('/:id').get(protect, admin, getOrderById)
orderRoutes.route('/:id/pay').put(protect, updateOrderToPaid)
orderRoutes.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export { orderRoutes }
