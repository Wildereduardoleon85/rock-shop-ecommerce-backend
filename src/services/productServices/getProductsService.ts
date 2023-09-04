import { ProductModel } from '../../models'
import { ServiceResponse } from '../../types'

export async function getProductsService(): Promise<ServiceResponse> {
  const products = await ProductModel.find({}).populate('user', 'id name')

  return {
    data: products,
    error: null,
    statusCode: 200,
  }
}
