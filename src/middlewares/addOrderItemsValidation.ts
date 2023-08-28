import { Request, Response, NextFunction } from 'express'
import { validateAddOrderItemsSchema } from '../validations'
import { validator } from './validator'

export const addOrderItemsValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  validator(req, res, next, validateAddOrderItemsSchema)
}
