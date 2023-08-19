import { Request } from 'express'
import { validateEmail } from '../utils'

export const validateAuthSchema = (req: Request): string[] => {
  const { email, password } = req.body

  const errors: string[] = []

  const emailValidation = validateEmail(email)

  if (!emailValidation.isValid) {
    errors.push(emailValidation.message)
  }

  if (!password) {
    errors.push('the field password is required')
  }

  return errors
}
