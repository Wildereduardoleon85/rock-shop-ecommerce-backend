import { Request } from 'express'
import { ProductModel } from '../../models'
import { ServiceResponse } from '../../types'

export async function getProductsService(
  req: Request
): Promise<ServiceResponse> {
  const { keywords } = req.query
  const query = keywords ? { name: { $regex: keywords, $options: 'i' } } : {}
  const products = await ProductModel.find(query).populate('user', 'id name')

  return {
    data: products,
    error: null,
    statusCode: 200,
  }
}
