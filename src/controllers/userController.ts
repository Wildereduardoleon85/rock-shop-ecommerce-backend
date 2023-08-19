import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import { ServiceResponse, UserResponse } from '../types'
import { authService, registerService } from '../services'
import { JSON_WEB_TOKEN_COOKIE } from '../constants'

/**
 * @desc  Auth user and get token
 * @route POST /api/v1/users/auth
 * @acess Public
 */
export const authUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode }: ServiceResponse<UserResponse> =
      await authService(req, res)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Register user
 * @route POST /api/v1/users
 * @acess Public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode }: ServiceResponse<UserResponse> =
      await registerService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Log out the user & clear cookie
 * @route POST /api/v1/users/logout
 * @acess Private
 */
export const logoutUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    res.cookie(JSON_WEB_TOKEN_COOKIE, '', {
      httpOnly: true,
      expires: new Date(0),
    })

    res.status(200).json({ msg: 'logout successful' })
  }
)

/**
 * @desc  Get user profile
 * @route GET /api/v1/users/profile
 * @acess Private
 */
export const getUserProfile = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('get user profile')
  }
)

/**
 * @desc  Update user profile
 * @route PUT /api/v1/users/profile
 * @acess Private
 */
export const updateUserProfile = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('update user profile')
  }
)

/**
 * @desc  Get users
 * @route GET /api/v1/users/admin
 * @acess Private/Admin
 */
export const getUsers = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('get users')
  }
)

/**
 * @desc  Get user by id
 * @route GET /api/v1/users/admin/:id
 * @acess Private/Admin
 */
export const getUserById = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('get user by id')
  }
)

/**
 * @desc  Delete user
 * @route DELETE /api/v1/users/admin/:id
 * @acess Private/Admin
 */
export const deleteUser = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('delete user')
  }
)

/**
 * @desc  Update user
 * @route PUT /api/v1/users/admin/:id
 * @acess Private/Admin
 */
export const updateUser = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('update user')
  }
)
