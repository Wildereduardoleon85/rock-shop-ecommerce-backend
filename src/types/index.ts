import { Schema } from 'mongoose'
import { Request } from 'express'

export type Product = {
  _id: string
  name: string
  images: {
    default: string
    md?: string
  }
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
  user: Schema.Types.ObjectId
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

export type OrderItem = {
  name: string
  qty: number
  images: {
    default: string
    md?: string
  }
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

export type UserProfileSchema = {
  name?: string
  email?: string
  password?: string
}

export interface UserSchema extends UserProfileSchema {
  isAdmin?: boolean
}
