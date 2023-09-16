import { Request, Response, NextFunction } from 'express'
import { validateCreateProductReviewSchema } from '../validations'
import { validator } from './validator'

export const createProductReviewValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  validator(req, res, next, validateCreateProductReviewSchema)
}
