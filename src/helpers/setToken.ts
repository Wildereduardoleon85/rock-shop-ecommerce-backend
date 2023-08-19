import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { JSON_WEB_TOKEN_COOKIE } from '../constants'

export function setToken(res: Response, payload: { [key: string]: any }): void {
  // Set JWT as HTTP-Only cookie
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  })

  res.cookie(JSON_WEB_TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // <--- 30 days
  })
}
