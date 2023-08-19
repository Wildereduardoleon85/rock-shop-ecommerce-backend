import { Request } from 'express'
import { validateEmail, validateName, validatePassword } from '../utils'

export const validateRegisterSchema = (req: Request): string[] => {
  const { name, email, password } = req.body

  const errors: string[] = []

  const emailValidation = validateEmail(email)
  const nameValidation = validateName(name)
  const passwordValidation = validatePassword(password)

  if (!nameValidation.isValid) {
    errors.push(nameValidation.message)
  }

  if (!emailValidation.isValid) {
    errors.push(emailValidation.message)
  }

  if (!passwordValidation.isValid) {
    errors.push(passwordValidation.message)
  }

  return errors
}
