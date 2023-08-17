import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import { ServiceResponse, UserResponse } from '../types'
import { authService } from '../services'

/**
 * @desc  Auth user and get token
 * @route POST /api/v1/users/login
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
  async (_req: Request, res: Response): Promise<void> => {
    res.send('register user')
  }
)

/**
 * @desc  Log out the user & clear cookie
 * @route POST /api/v1/users/logout
 * @acess Private
 */
export const logoutUser = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.send('logout user')
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
