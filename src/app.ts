import express from 'express'
import { productRoutes } from './routes'
import cors from 'cors'

require('dotenv').config()

const app = express()

app.use(cors())

const port: number | string = process.env.PORT ?? 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/health-check', (req, res) => {
  res.send('OK')
})

app.use('/api/v1/products', productRoutes)

app.listen(port, () => console.log(`server running on port ${port}`))
