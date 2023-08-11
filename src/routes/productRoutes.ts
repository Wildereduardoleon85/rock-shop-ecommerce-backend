import { Router } from 'express'
import { getProducts, getProduct } from '../controllers/productsController'

const productRoutes: Router = Router()

productRoutes.route('/').get(getProducts)
productRoutes.route('/:id').get(getProduct)

export { productRoutes }
