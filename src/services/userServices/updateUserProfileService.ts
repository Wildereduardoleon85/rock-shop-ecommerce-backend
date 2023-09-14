import { Model } from 'mongoose'
import { UserModel } from '../../models'
import {
  AuthRequest,
  ServiceResponse,
  UserProfileSchema,
  User,
} from '../../types'
import { validateUpdateUserProfileSchema } from '../../validations'

async function updateUserDocument(
  id: string,
  userModel: Model<User>,
  schema: UserProfileSchema
): Promise<ServiceResponse> {
  const updatedUser = (await userModel.findByIdAndUpdate(
    id,
    { $set: schema },
    { new: true }
  )) as User

  if (updatedUser) {
    return {
      data: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      },
      error: null,
      statusCode: 200,
    }
  }

  return {
    error: `user with id ${id} not found`,
    statusCode: 404,
  }
}

export const updateUserProfileService = async (
  req: AuthRequest
): Promise<ServiceResponse> => {
  const { email, password, name } = req.body

  const { updatedUserData, error: validationError } =
    await validateUpdateUserProfileSchema({
      email,
      password,
      name,
      id: req.user?._id,
    })

  if (validationError.length) {
    return {
      error: validationError,
      statusCode: 400,
    }
  }

  if (Object.keys(updatedUserData).length) {
    const { data, error, statusCode } = await updateUserDocument(
      req.user?._id as string,
      UserModel,
      updatedUserData
    )

    return {
      data,
      error,
      statusCode,
    }
  }

  return {
    error: 'no body data to update',
    statusCode: 400,
  }
}
