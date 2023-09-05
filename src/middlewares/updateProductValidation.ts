import { Request, Response, NextFunction } from 'express'
import { validateUpdateProductSchema } from '../validations'
import { validator } from './validator'

export const updateProductValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  validator(req, res, next, validateUpdateProductSchema)
}
