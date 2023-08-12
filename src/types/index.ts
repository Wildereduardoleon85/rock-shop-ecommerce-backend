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
}

export type ReviewSchema = {
  user: User
  name: string
  rating: number
  comment: string
}

export interface ProductSchema extends Product {
  user: User
  reviews: ReviewSchema
}

export type User = {
  name: string
  email: string
  password: string
  isAdmin: boolean
}

export type OrderItem = {
  name: string
  qty: number
  image: string
  price: number
  product: ProductSchema
}

export type ShippingAddress = {
  address: string
  city: string
  postalCode: string
  country: string
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

export type Order = {
  user: User
  orderItems: OrderItem[]
  shippingAdress: ShippingAddress
}
