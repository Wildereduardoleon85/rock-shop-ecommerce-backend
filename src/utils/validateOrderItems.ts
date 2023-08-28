import { SchemaValidation } from '../types'
import { validateSingleString } from './validateSingleString'

function validateItems(orderItems: any): SchemaValidation {
  let message = ''
  let isValid = true

  orderItems.forEach((item: any, index: number) => {
    if (!validateSingleString(item.name).isValid) {
      isValid = false
      message = `invalid orderItems[${index}].name field`
    }

    if (String(item.qty).trim().length < 1 || typeof item.qty !== 'number') {
      isValid = false
      message = `invalid orderItems[${index}].qty field`
    }

    if (item.qty === 0) {
      isValid = false
      message = `field orderItems[${index}].qty must not be zero`
    }

    if (!validateSingleString(item.image).isValid) {
      isValid = false
      message = `invalid orderItems[${index}].image field`
    }

    if (
      String(item.price).trim().length < 1 ||
      typeof item.price !== 'number'
    ) {
      isValid = false
      message = `invalid orderItems[${index}].price field`
    }

    if (item.price === 0) {
      isValid = false
      message = `field orderItems[${index}].price must not be zero`
    }

    if (!validateSingleString(item.product).isValid) {
      isValid = false
      message = `invalid orderItems[${index}].product field`
    }
  })

  return {
    isValid,
    message,
  }
}

export function validateOrderItems(orderItems: any): SchemaValidation {
  let message = ''
  let isValid = true

  if (!Array.isArray(orderItems)) {
    isValid = false
    message = 'field order items must be an array'
  }

  if (orderItems.length === 0) {
    isValid = false
    message = 'there must be at least 1 order item'
  }

  const { isValid: validationIsValid, message: validationMessage } =
    validateItems(orderItems)

  message = validationMessage
  isValid = validationIsValid

  return {
    isValid,
    message,
  }
}
