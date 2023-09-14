import { Request, Response } from 'express'
import { asyncHandler } from '../middlewares'
import { AuthRequest } from '../types'
import {
  authService,
  registerService,
  getUserProfileService,
  updateUserProfileService,
  getUsersService,
  getUserByIdService,
  deleteUserService,
  updateUserService,
} from '../services'
import { JSON_WEB_TOKEN_COOKIE } from '../constants'

/**
 * @desc  Auth user and get token
 * @route POST /api/v1/users/auth
 * @acess Public
 */
export const authUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { data, error, statusCode } = await authService(req, res)

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
    const { data, error, statusCode } = await registerService(req, res)

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
  async (_req: Request, res: Response): Promise<void> => {
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
  async (req: AuthRequest, res: Response): Promise<void> => {
    const { error, data, statusCode } = await getUserProfileService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Update user profile
 * @route PUT /api/v1/users/profile
 * @acess Private
 */
export const updateUserProfile = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { error, data, statusCode } = await updateUserProfileService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Get users
 * @route GET /api/v1/users/admin
 * @acess Private/Admin
 */
export const getUsers = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { error, data, statusCode } = await getUsersService()

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Get user by id
 * @route GET /api/v1/users/admin/:id
 * @acess Private/Admin
 */
export const getUserById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { error, data, statusCode } = await getUserByIdService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Delete user
 * @route DELETE /api/v1/users/admin/:id
 * @acess Private/Admin
 */
export const deleteUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { error, data, statusCode } = await deleteUserService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)

/**
 * @desc  Update user
 * @route PUT /api/v1/users/admin/:id
 * @acess Private/Admin
 */
export const updateUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { error, data, statusCode } = await updateUserService(req)

    if (error) {
      res.status(statusCode)
      throw new Error(error)
    }

    res.status(statusCode).json(data)
  }
)
