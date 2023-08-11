/* eslint-disable no-underscore-dangle */
import express from 'express'
import products from './data'
require('dotenv').config()

const app = express()

const port: number | string = process.env.PORT ?? 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/health-check', (req, res) => {
  res.send('OK')
})

app.get('/api/v1/products', (req, res) => {
  res.json(products)
})

app.get('/api/v1/products/:id', (req, res) => {
  const product = products.find((singleProduct) => singleProduct._id === req.params.id)
  res.json(product)
})

app.listen(port, () => console.log(`server running on port ${port}`))
