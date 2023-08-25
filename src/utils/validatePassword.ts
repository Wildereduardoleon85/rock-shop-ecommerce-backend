import { SchemaValidation } from '../types'

export const validatePassword = (password: any): SchemaValidation => {
  if (!password) {
    return {
      isValid: false,
      message: 'field password is required',
    }
  }

  if (typeof password !== 'string') {
    return {
      isValid: false,
      message: 'field password must be a string',
    }
  }

  if (password.trim().length < 6) {
    return {
      isValid: false,
      message: 'field password must be at least 6 characters',
    }
  }

  if (password.trim().length > 16) {
    return {
      isValid: false,
      message: 'field password must must not exceed 10 characters',
    }
  }

  if (
    /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/.test(password) &&
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)
  ) {
    return {
      isValid: true,
      message: '',
    }
  }

  return {
    isValid: false,
    message:
      'field password must contain: Uppercase letter, Lowercase letter, number and a special character',
  }
}
