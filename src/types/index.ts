import { Schema } from 'mongoose'
import { Request } from 'express'

export type Product = {
  _id: string
  name: string
  image: string
  description: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
  reviews?: Review[]
  user: Schema.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

export type Review = {
  user: User
  name: string
  rating: number
  comment: string
}

export type User = {
  _id: string
  name: string
  email: string
  password: string
  isAdmin: boolean
}

export type UserResponse = Omit<User, 'password'>

export interface OrderItem extends Document {
  name: string
  qty: number
  image: string
  price: number
  product: Schema.Types.ObjectId
}

export interface Order extends Document {
  user: Schema.Types.ObjectId
  orderItems: OrderItem[]
  shippingAddress: {
    address: string
    city: string
    postalCode: string
    country: string
  }
  paymentMethod: string
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt: Date
  isDelivered: boolean
  deliveredAt: Date
}

export type ServiceResponse = {
  data?: any
  error: string | null
  statusCode: number
}

export interface AuthRequest extends Request {
  user?: User
}

export type SchemaValidation = {
  isValid: boolean
  message: string
}
