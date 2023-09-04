/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err.message.includes('Cast to ObjectId failed')) {
    res.status(404)
    res.json({
      message: 'item not found',
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  } else {
    const statusCode: number = res.statusCode === 200 ? 500 : res.statusCode

    res.status(statusCode)
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
}
