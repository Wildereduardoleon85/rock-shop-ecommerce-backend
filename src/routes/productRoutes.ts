import { Router } from 'express'
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers'
import { admin, protect, updateProductValidation } from '../middlewares'

const productRoutes: Router = Router()

productRoutes.route('/').get(getProducts).post(protect, admin, createProduct)
productRoutes
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProductValidation, updateProduct)
  .delete(protect, admin, deleteProduct)

export { productRoutes }
