import { SchemaValidation } from '../types'

export function validateNumber(
  value: any,
  allowZero: boolean = true,
  fieldName: string = ''
): SchemaValidation {
  let message = ''
  let isValid = true

  if (typeof value !== 'number') {
    message = `field ${fieldName} must be a number`
    isValid = false
  }

  if (!allowZero && value === 0) {
    message = `field ${fieldName} must not be zero`
    isValid = false
  }

  return {
    message,
    isValid,
  }
}
