import { hashPassword } from '../helpers'
import { UserProfileSchema } from '../types'
import { validateEmail, validateName, validatePassword } from '../utils'

export async function validateUpdateUserProfileSchema({
  email,
  password,
  name,
  id,
}: {
  id?: string
  email?: string
  password?: string
  name?: string
}) {
  const validationMessage = []
  const updatedUserData: UserProfileSchema = {}

  if (String(id) === process.env.DEFAULT_ADMIN_USER) {
    validationMessage.push('default admin user must not be modified')
  }

  if (email) {
    const { isValid, message } = validateEmail(email)
    if (!isValid) {
      validationMessage.push(message)
    } else {
      updatedUserData.email = email
    }
  }

  if (password) {
    const { isValid, message } = validatePassword(password)
    if (!isValid) {
      validationMessage.push(message)
    } else {
      const hashedPassword = await hashPassword(password)
      updatedUserData.password = hashedPassword
    }
  }

  if (name) {
    const { isValid, message } = validateName(name)
    if (!isValid) {
      validationMessage.push(message)
    } else {
      updatedUserData.name = name
    }
  }

  return {
    error: validationMessage.join(', '),
    updatedUserData,
  }
}
