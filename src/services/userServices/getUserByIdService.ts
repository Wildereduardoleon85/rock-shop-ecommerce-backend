import { Request } from 'express'
import { UserModel } from '../../models'
import { ServiceResponse } from '../../types'

export async function getUserByIdService(
  req: Request
): Promise<ServiceResponse> {
  const user = await UserModel.findById(req.params.id).select('-password')

  if (user) {
    return {
      data: user,
      error: null,
      statusCode: 200,
    }
  }

  return {
    error: `user with id ${req.params.id} not found`,
    statusCode: 404,
  }
}
