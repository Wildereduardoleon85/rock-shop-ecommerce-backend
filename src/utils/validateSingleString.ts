import { SchemaValidation } from '../types'

export function validateSingleString(
  value: string,
  min: number = 2,
  fieldName: string = ''
): SchemaValidation {
  if (!value) {
    return {
      isValid: false,
      message: `field ${fieldName} is required`,
    }
  }

  if (typeof value !== 'string') {
    return {
      isValid: false,
      message: `field ${fieldName} must be a string`,
    }
  }

  if (value.trim().length === 0) {
    return {
      isValid: false,
      message: `field ${fieldName} must not be empty`,
    }
  }

  if (value.trim().length < min) {
    return {
      isValid: false,
      message: `field ${fieldName} must be at least ${min} characters long`,
    }
  }

  return {
    isValid: true,
    message: '',
  }
}
