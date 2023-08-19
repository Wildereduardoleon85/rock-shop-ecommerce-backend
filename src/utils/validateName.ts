import { SchemaValidation } from '../types'

export const validateName = (name: any): SchemaValidation => {
  if (!name) {
    return {
      isValid: false,
      message: 'field name is required',
    }
  }

  if (typeof name !== 'string') {
    return {
      isValid: false,
      message: 'field name must be a string',
    }
  }

  if (name.trim().length === 0) {
    return {
      isValid: false,
      message: 'field name must not be empty',
    }
  }

  if (name.trim().length < 2) {
    return {
      isValid: false,
      message: 'field name is invalid',
    }
  }

  return {
    isValid: true,
    message: '',
  }
}
