import express from 'express'
require('dotenv').config()

const app = express()

const port: number | string = process.env.PORT ?? 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', () => {
  console.log('hello world')
})

app.listen(port, () => console.log(`server running on port ${port}`))
