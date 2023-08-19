import { Request, Response, NextFunction } from 'express'
import { validateRegisterSchema } from '../validations'
import { validator } from './validator'

export const registerValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  validator(req, res, next, validateRegisterSchema)
}
