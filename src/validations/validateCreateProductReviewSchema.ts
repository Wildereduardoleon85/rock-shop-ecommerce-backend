import { Request } from 'express'
import { validateNumber } from '../utils'

export const validateCreateProductReviewSchema = (req: Request): string[] => {
  const { comment, rating } = req.body

  const errors: string[] = []

  const ratingValidation = validateNumber(rating, true, 'rating')

  if (typeof comment !== 'undefined' && typeof comment !== 'string') {
    errors.push('field comment must be a string')
  }

  if (!ratingValidation.isValid) {
    errors.push(ratingValidation.message)
  }

  if (rating < 0) {
    errors.push('field rating must be positive integer')
  }

  if (rating > 5) {
    errors.push('field rating must not be greater than 5')
  }

  return errors
}
