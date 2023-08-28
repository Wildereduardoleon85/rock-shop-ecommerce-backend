import mongoose, { Schema } from 'mongoose'
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
  user: mongoose.Schema.Types.ObjectId
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

export type OrderItem = {
  name: string
  qty: number
  image: string
  price: number
  product: Schema.Types.ObjectId
}

export type ShippingAddress = {
  address: string
  city: string
  postalCode: string
  country: string
}

export type Order = {
  user: Schema.Types.ObjectId
  orderItems: OrderItem[]
  shippingAddress: ShippingAddress
  paymentMethod: string
  paymentResult: {
    id?: string
    status?: string
    update_time?: string
    email_adress?: string
  }
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  isPaid: boolean
  paidAt: Date
  isDelivered: boolean
  deliveredAt: Date
}

export type ServiceResponse<T> = {
  data?: T
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

export type GetOrderByIdResponse = Omit<Order, 'user'> & {
  user: {
    _id: Schema.Types.ObjectId
    name: string
    email: string
  }
}
