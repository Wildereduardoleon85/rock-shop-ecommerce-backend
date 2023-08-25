import { AuthRequest, ServiceResponse, UserResponse } from '../../types'
import { UserModel } from '../../models'

export async function getUserProfileService(
  req: AuthRequest
): Promise<ServiceResponse<UserResponse>> {
  try {
    const user = (await UserModel.findById(req.user?._id)) as UserResponse
    return {
      error: null,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      statusCode: 200,
    }
  } catch (error) {
    return {
      error: `user with id ${req.user?._id} is not found`,
      statusCode: 404,
    }
  }
}
