import { Request } from 'express'
import { ProductModel } from '../../models'
import { ServiceResponse, Product } from '../../types'

export async function getProductByIdService(
  req: Request
): Promise<ServiceResponse<Product>> {
  /**
   * Although there is a setting for handling errors like this (asyncHandler), we force
   * to use this try catch block because this is a special case when mongoose throws
   * automatically an error with a status code of 200 when the id does't exists, so we need
   * control this flow to force a 404 status code and a custom message
   */
  try {
    const product = (await ProductModel.findById(req.params.id)) as Product
    return {
      data: product,
      error: null,
      statusCode: 200,
    }
  } catch (_error) {
    return {
      error: 'product not found',
      statusCode: 404,
    }
  }
}
