import { Request, Response } from 'express'
import { UserModel } from '../../models'
import { ServiceResponse, UserResponse } from '../../types'
import { hashPassword, setToken } from '../../helpers'

export async function registerService(
  req: Request,
  res: Response
): Promise<ServiceResponse<UserResponse>> {
  const { email, password, name } = req.body

  const userExists = await UserModel.findOne({ email })

  if (userExists) {
    return {
      error: 'the user alredy exists',
      statusCode: 400,
    }
  }

  const hashedPassword = await hashPassword(password)

  const user = await UserModel.create({
    name,
    email,
    password: hashedPassword,
  })

  setToken(res, { id: user._id })

  return {
    error: null,
    statusCode: 201,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  }
}
