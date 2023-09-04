import { Request, Response } from 'express'
import { UserModel } from '../../models'
import { ServiceResponse } from '../../types'
import { hashPassword, setToken } from '../../helpers'
import { capitalize } from '../../utils/capialize'

export async function registerService(
  req: Request,
  res: Response
): Promise<ServiceResponse> {
  const { email, password, name } = req.body

  const userExists = await UserModel.findOne({ email })

  if (userExists) {
    return {
      error: 'the user alredy exists',
      statusCode: 400,
    }
  }

  const hashedPassword = await hashPassword(password)

  const user = await UserModel.create({
    name: capitalize(name),
    email: email.toLowerCase(),
    password: hashedPassword,
  })

  setToken(res, { id: user._id })

  return {
    error: null,
    statusCode: 201,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
  }
}
