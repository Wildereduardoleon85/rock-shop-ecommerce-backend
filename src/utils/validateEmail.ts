import { SchemaValidation } from '../types'

export const validateEmail = (email: any): SchemaValidation => {
  if (!email) {
    return {
      isValid: false,
      message: 'field email is required',
    }
  }

  if (typeof email !== 'string') {
    return {
      isValid: false,
      message: 'field email must be a string',
    }
  }

  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return {
      isValid: true,
      message: '',
    }
  }

  return {
    isValid: false,
    message: 'field email is invalid',
  }
}
