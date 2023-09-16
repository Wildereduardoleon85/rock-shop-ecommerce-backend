import { Router } from 'express'
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createPtoductReview,
} from '../controllers'
import {
  admin,
  protect,
  updateProductValidation,
  createProductReviewValidation,
} from '../middlewares'

const productRoutes: Router = Router()

productRoutes.route('/').get(getProducts).post(protect, admin, createProduct)
productRoutes
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProductValidation, updateProduct)
  .delete(protect, admin, deleteProduct)
productRoutes
  .route('/:id/reviews')
  .post(protect, createProductReviewValidation, createPtoductReview)

export { productRoutes }
