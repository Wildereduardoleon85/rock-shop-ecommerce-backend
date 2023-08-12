import mongoose from 'mongoose'

async function connectDB() {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URI as string
    )
    console.log(`mongo DB connected: ${connection.host}`)
  } catch (error: any) {
    console.log(`Mongo DB error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
