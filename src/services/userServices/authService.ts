import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserModel } from '../../models'
import { ServiceResponse, UserResponse } from '../../types'
import { JSON_WEB_TOKEN_COOKIE } from '../../constants'

export async function authService(
  req: Request,
  res: Response
): Promise<ServiceResponse<UserResponse>> {
  const { email, password } = req.body

  const user = await UserModel.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    // Set JWT as HTTP-Only cookie
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: '30d',
    })

    res.cookie(JSON_WEB_TOKEN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000, // <--- 30 days
    })

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
