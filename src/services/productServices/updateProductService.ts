import { Request } from 'express'
import { ProductModel } from '../../models'

export async function updateProductService(req: Request) {
  const updatedProduct = await ProductModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )

  if (updatedProduct) {
    return {
      error: null,
      data: updatedProduct,
      statusCode: 200,
    }
  }

  return {
    error: `product with id ${req.params.id} not found`,
    statusCode: 404,
  }
}
