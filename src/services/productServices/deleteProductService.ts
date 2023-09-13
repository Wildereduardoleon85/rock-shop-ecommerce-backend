import { Request } from 'express'
import { ServiceResponse } from '../../types'
import { ProductModel } from '../../models'
import { DEFAULT_PRODUCT_IDS } from '../../constants'

export async function deleteProductService(
  req: Request
): Promise<ServiceResponse> {
  const { id } = req.params
  const foundProduct = await ProductModel.findById(id)

  if (foundProduct) {
    if (DEFAULT_PRODUCT_IDS.includes(id)) {
      return {
        error: 'this product should not be deleted',
        statusCode: 400,
      }
    }

    await ProductModel.findByIdAndDelete(id)

    return {
      data: 'product deleted successfully',
      statusCode: 200,
      error: null,
    }
  }

  return {
    error: `product with id ${id} not found`,
    statusCode: 404,
  }
}
