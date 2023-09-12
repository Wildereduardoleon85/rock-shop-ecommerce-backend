import { Request } from 'express'
import { ServiceResponse } from '../../types'
import { ProductModel } from '../../models'

export async function deleteProductService(
  req: Request
): Promise<ServiceResponse> {
  const productDeleted = await ProductModel.findByIdAndDelete(req.params.id)

  if (!productDeleted) {
    return {
      error: `product with id ${req.params.id} not found`,
      statusCode: 404,
    }
  }

  return {
    data: null,
    error: '',
    statusCode: 200,
  }
}
