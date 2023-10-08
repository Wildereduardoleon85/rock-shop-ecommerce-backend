import { ProductModel } from '../../models'
import { ServiceResponse, AuthRequest } from '../../types'

export async function createProductService(
  req: AuthRequest
): Promise<ServiceResponse> {
  const createdProduct = await ProductModel.create({
    name: 'Sample name',
    price: 0,
    user: req.user?._id,
    images: {
      default: 'sample-image.webp',
      md: 'sample-image-md.webp',
    },
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  return {
    data: createdProduct,
    error: null,
    statusCode: 201,
  }
}
