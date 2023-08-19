import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { productRoutes, userRoutes } from './routes'
import connectDB from './config/db'
import { errorHandler, notFound } from './middlewares'

require('dotenv').config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const PORT: number | string = process.env.PORT ?? 5000

app.get('/health-check', (req, res) => {
  res.send('OK')
})

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
