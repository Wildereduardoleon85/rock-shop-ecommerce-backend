import { Request } from 'express'
import {
  validateNumber,
  validateOrderItems,
  validateShippingAddress,
  validateSingleString,
} from '../utils'

export const validateAddOrderItemsSchema = (req: Request): string[] => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  const errors: string[] = []

  const orderItemsValidation = validateOrderItems(orderItems)
  const shippingAddressValidation = validateShippingAddress(shippingAddress)
  const paymentMethodValidation = validateSingleString(
    paymentMethod,
    2,
    'paymentMethod'
  )
  const itemsPriceValidation = validateNumber(itemsPrice, false, 'itemsPrice')
  const taxPriceValidation = validateNumber(taxPrice, false, 'taxPrice')
  const shippingPriceValidation = validateNumber(
    shippingPrice,
    true,
    'shippingPrice'
  )
  const totalPriceValidation = validateNumber(totalPrice, false, 'totalPrice')

  const validations = [
    orderItemsValidation,
    shippingAddressValidation,
    paymentMethodValidation,
    itemsPriceValidation,
    taxPriceValidation,
    shippingPriceValidation,
    totalPriceValidation,
  ]

  validations.forEach((validation) => {
    if (!validation.isValid) {
      errors.push(validation.message)
    }
  })

  return errors
}
