import { Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { asyncHandler } from './asyncHandler'
import { UserModel } from '../models'
import { AuthRequest, User } from '../types'

export const protect = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    // Read the JWT from the cookie
    const token = req.cookies.jwt
    const jwtSecret = process.env.JWT_SECRET as string

    if (token) {
      try {
        const decoded = jwt.verify(token, jwtSecret) as JwtPayload
        const user = await UserModel.findById(decoded.id).select('-password')
        req.user = user as User
        next()
      } catch (error) {
        res.status(401)
        throw new Error('Not authorized, invalid token')
      }
    } else {
      res.status(401)
      throw Error('Not authorized, no token')
    }
  }
)

export const admin = asyncHandler(
  async (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user?.isAdmin) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized as admin')
    }
  }
)
