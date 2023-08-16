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

const userRoutes: Router = Router()

userRoutes.post('/login', authUser)
userRoutes.post('/logout', logoutUser)
userRoutes.post('/', registerUser)
userRoutes.route('/profile').get(getUserProfile).put(updateUserProfile)
// admin routes:
userRoutes.get('/admin', getUsers)
userRoutes
  .route('/admin/:id')
  .get(getUserById)
  .delete(deleteUser)
  .put(updateUser)

export { userRoutes }
