import { Request } from 'express'
import { validateNumber, validateSingleString } from '../utils'

export function validateUpdateProductSchema(req: Request): string[] {
  const { name, price, description, image, brand, category, countInStock } =
    req.body

  const errors: string[] = []
  const nameValidation = validateSingleString(name, 2, 'name')
  const priceValidation = validateNumber(price, true, 'price')
  const descriptionValidation = validateSingleString(
    description,
    10,
    'description'
  )
  const imageValidation = validateSingleString(image, 5, 'image')
  const brandValidation = validateSingleString(brand, 2, 'brand')
  const categoryValidation = validateSingleString(category, 3, 'cetegory')
  const countInStockValidation = validateNumber(
    countInStock,
    true,
    'countInStock'
  )

  if ('name' in req.body && !nameValidation.isValid) {
    errors.push(nameValidation.message)
  }

  if ('price' in req.body && !priceValidation.isValid) {
    errors.push(priceValidation.message)
  }

  if ('description' in req.body && !descriptionValidation.isValid) {
    errors.push(descriptionValidation.message)
  }

  if ('image' in req.body && !imageValidation.isValid) {
    errors.push(imageValidation.message)
  }

  if ('brand' in req.body && !brandValidation.isValid) {
    errors.push(brandValidation.message)
  }

  if ('category' in req.body && !categoryValidation.isValid) {
    errors.push(categoryValidation.message)
  }

  if ('countInStock' in req.body && !countInStockValidation.isValid) {
    errors.push(countInStockValidation.message)
  }

  return errors
}
