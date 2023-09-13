import { ServiceResponse } from '../../types'
import { UserModel } from '../../models'

export async function getUsersService(): Promise<ServiceResponse> {
  const users = await UserModel.find().select('-password')

  return {
    data: users,
    error: null,
    statusCode: 200,
  }
}
