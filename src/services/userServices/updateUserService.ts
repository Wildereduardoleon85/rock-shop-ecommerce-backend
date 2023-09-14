import { Request } from 'express'
import { ServiceResponse, User } from '../../types'
import { validateUpdateUserSchema } from '../../validations'
import { UserModel } from '../../models'

export async function updateUserService(
  req: Request
): Promise<ServiceResponse> {
  const { id } = req.params
  const { updatedUserData, error } = await validateUpdateUserSchema({
    ...req.body,
    id,
  })

  if (error) {
    return {
      error,
      statusCode: 400,
    }
  }

  if (Object.keys(updatedUserData).length === 0) {
    return {
      error: 'No body data to update',
      statusCode: 400,
    }
  }

  const updatedUser = (await UserModel.findByIdAndUpdate(
    id,
    { $set: updatedUserData },
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
