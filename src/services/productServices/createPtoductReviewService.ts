import { Schema } from 'mongoose'
import { AuthRequest, Review, ServiceResponse } from '../../types'
import { ProductModel } from '../../models'

export async function createPtoductReviewService(
  req: AuthRequest
): Promise<ServiceResponse> {
  const {
    body,
    params: { id },
    user,
  } = req

  const foundProduct = await ProductModel.findById(id)

  if (!foundProduct) {
    return {
      error: `product with id ${id} not found`,
      statusCode: 404,
    }
  }

  const alredyReviewed = foundProduct.reviews?.find(
    (review) => String(review.user) === String(user?._id)
  )

  if (alredyReviewed) {
    return {
      error: 'Product alredy reviewed',
      statusCode: 400,
    }
  }

  const userId = user?._id as unknown

  const review = {
    name: user?.name as string,
    rating: Number(body.rating),
    comment: body.comment,
    user: userId as Schema.Types.ObjectId,
  }

  foundProduct.reviews?.push(review)
  const numberOfReviews = foundProduct.reviews?.length as number
  foundProduct.numReviews = numberOfReviews
  const reviews = foundProduct?.reviews as Review[]
  const rating =
    reviews.reduce((acc, rev) => acc + rev.rating, 0) / numberOfReviews
  foundProduct.rating = rating

  await foundProduct.save()

  return {
    error: null,
    data: foundProduct,
    statusCode: 200,
  }
}
