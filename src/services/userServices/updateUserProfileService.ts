import { Model } from 'mongoose'
import { UserModel } from '../../models'
import { AuthRequest, ServiceResponse, User } from '../../types'
import { validateEmail, validateName, validatePassword } from '../../utils'
import { hashPassword } from '../../helpers'

type UpdatedUser = {
  name?: string
  email?: string
  password?: string
}

async function updateUserDocument(
  id: string,
  userModel: Model<User>,
  schema: UpdatedUser
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

  const validationMessage = []
  const updatedUserData: UpdatedUser = {}

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

  if (validationMessage.length) {
    return {
      error: validationMessage.join(', '),
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
