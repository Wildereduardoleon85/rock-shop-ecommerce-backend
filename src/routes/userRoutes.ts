import { Router } from 'express'
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../controllers'
import { admin, protect, registerValidation } from '../middlewares'

const userRoutes: Router = Router()

userRoutes.post('/auth', authUser)
userRoutes.post('/logout', logoutUser)
userRoutes.post('/', registerValidation, registerUser)
userRoutes
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
// admin routes:
userRoutes.get('/admin', protect, admin, getUsers)
userRoutes
  .route('/admin/:id')
  .get(protect, admin, getUserById)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser)

export { userRoutes }
