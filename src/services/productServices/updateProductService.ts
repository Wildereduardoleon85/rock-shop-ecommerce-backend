import { Request } from 'express'
import { ProductModel } from '../../models'

export async function updateProductService(req: Request) {
  const updatedProduct = await ProductModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )

  return {
    error: null,
    data: updatedProduct,
    statusCode: 200,
  }
}
