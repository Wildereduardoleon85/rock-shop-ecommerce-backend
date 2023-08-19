import { Request, Response, NextFunction } from 'express'
import { validateAuthSchema } from '../validations'
import { validator } from './validator'

export const authValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  validator(req, res, next, validateAuthSchema)
}
