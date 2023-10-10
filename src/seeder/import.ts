import connectDB from '../config/db'
import products from '../data/products'
import { hashPassword } from '../helpers'
import { OrderModel, ProductModel, UserModel } from '../models'
import { consoleColor } from '../utils'

require('dotenv').config()

connectDB()

async function cleanDatabase() {
  try {
    await UserModel.deleteMany({})
    await ProductModel.deleteMany({})
    await OrderModel.deleteMany({})
    consoleColor('collections deleted successfully!', 'green')
  } catch (error) {
    consoleColor(error, 'red')
  }
}

async function createAdminUser() {
  const hashedPassword = await hashPassword('Admin123*')

  try {
    await UserModel.create({
      name: 'Admin',
      email: 'admin@email.com',
      password: hashedPassword,
      isAdmin: true,
    })
    consoleColor('admin user created', 'green')
  } catch (error) {
    consoleColor(error, 'red')
  }
}

async function importData() {
  try {
    await cleanDatabase()
    await createAdminUser()
    const user = await UserModel.find({ email: 'admin@email.com' })
    const productsWithUser = products.map((product) => ({
      ...product,
      user: user[0]._id,
    }))
    await ProductModel.insertMany(productsWithUser)
    consoleColor('products inserted in databse', 'green')
    process.exit()
  } catch (error) {
    consoleColor(error, 'red')
    process.exit(1)
  }
}

importData()
