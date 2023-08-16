import { Router } from 'express'
import { getProducts, getProductById } from '../controllers'

const productRoutes: Router = Router()

productRoutes.route('/').get(getProducts)
productRoutes.route('/:id').get(getProductById)

export { productRoutes }
