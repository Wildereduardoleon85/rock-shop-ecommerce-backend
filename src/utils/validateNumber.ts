import { SchemaValidation } from '../types'

export function validateNumber(
  value: any,
  allowZero: boolean = true,
  fieldName: string = ''
): SchemaValidation {
  if (value === 'undefined') {
    return {
      message: `field ${fieldName} is required`,
      isValid: false,
    }
  }

  if (typeof value !== 'number') {
    return {
      message: `field ${fieldName} must be a number`,
      isValid: false,
    }
  }

  if (!allowZero && value === 0) {
    return {
      message: `field ${fieldName} must not be zero`,
      isValid: false,
    }
  }

  return {
    message: '',
    isValid: true,
  }
}
