import { Router } from 'express'
import { getProducts, getProductById, createProduct } from '../controllers'
import { admin, protect } from '../middlewares'

const productRoutes: Router = Router()

productRoutes.route('/').get(getProducts).post(protect, admin, createProduct)
productRoutes.route('/:id').get(getProductById)

export { productRoutes }
