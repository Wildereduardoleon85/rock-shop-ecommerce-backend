import mongoose from 'mongoose'
import { consoleColor } from '../utils'

async function connectDB() {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI as string
    )
    consoleColor(`mongo DB connected: ${connection.host}`, 'cyan')
  } catch (error: any) {
    consoleColor(`Mongo DB error: ${error.message}`, 'red')
    process.exit(1)
  }
}

export default connectDB
