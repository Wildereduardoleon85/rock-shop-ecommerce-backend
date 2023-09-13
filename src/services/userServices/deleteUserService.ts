import { Request } from 'express'
import { ServiceResponse } from '../../types'
import { UserModel } from '../../models'

export async function deleteUserService(
  req: Request
): Promise<ServiceResponse> {
  const { id } = req.params
  const user = await UserModel.findById(id)

  if (user) {
    if (user.isAdmin) {
      return {
        error: 'cannot delete admin user',
        statusCode: 400,
      }
    }

    await UserModel.findByIdAndDelete(id)

    return {
      data: 'user deleted successfully',
      error: null,
      statusCode: 200,
    }
  }

  return {
    statusCode: 404,
    error: `user with id ${id} not found`,
  }
}
