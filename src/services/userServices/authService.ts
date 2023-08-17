import { Request } from 'express'
import bcrypt from 'bcryptjs'
import { UserModel } from '../../models'
import { ServiceResponse, UserResponse } from '../../types'

export async function authService(
  req: Request
): Promise<ServiceResponse<UserResponse>> {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
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
