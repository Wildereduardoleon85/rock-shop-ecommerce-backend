import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { UserModel } from '../../models'
import { ServiceResponse, UserResponse } from '../../types'
import { setToken } from '../../utils'

export async function authService(
  req: Request,
  res: Response
): Promise<ServiceResponse<UserResponse>> {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    setToken(res, { id: user._id })

    return {
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      error: null,
      statusCode: 200,
    }
  }

  return {
    error: 'invalid credentials',
    statusCode: 401,
  }
}
