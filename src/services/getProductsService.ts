import { ProductModel } from '../models'
import { ServiceResponse, Product } from '../types'

export async function getProductsService(): Promise<
  ServiceResponse<Product[]>
> {
  const products = await ProductModel.find()

  return {
    data: products,
    error: null,
    statusCode: 200,
  }
}
