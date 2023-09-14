import { validateUpdateUserProfileSchema } from './validateUpdateUserProfileSchema'
import { UserSchema } from '../types'

export async function validateUpdateUserSchema(body: UserSchema) {
  const validationResult = await validateUpdateUserProfileSchema(body)

  let { error } = validationResult
  const newSchema = validationResult.updatedUserData as UserSchema

  if (typeof body.isAdmin !== 'undefined') {
    if (typeof body.isAdmin !== 'boolean') {
      const isAdminError = 'field isAdmin must be boolean'
      error = validationResult.error
        ? `${validationResult.error}, ${isAdminError}`
        : isAdminError
    } else {
      newSchema.isAdmin = body.isAdmin
    }
  }

  return {
    error,
    updatedUserData: newSchema,
  }
}
