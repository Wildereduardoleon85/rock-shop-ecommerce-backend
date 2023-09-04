import { Request } from 'express'
import { ProductModel } from '../../models'
import { ServiceResponse } from '../../types'

export async function getProductByIdService(
  req: Request
): Promise<ServiceResponse> {
  const product = await ProductModel.findById(req.params.id)

  return {
    data: product,
    error: null,
    statusCode: 200,
  }
}
