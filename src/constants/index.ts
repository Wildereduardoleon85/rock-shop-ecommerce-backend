export const JSON_WEB_TOKEN_COOKIE: string = 'jwt'
export const DEFAULT_PRODUCT_IDS = [
  '64eacb1f16470bc4aa866596',
  '64eacb5328c1d31f919d97eb',
  '64eacb73f29c49678dd5c2a7',
  '64eacb8b48897b60aa8751c6',
  '64eacba100e3e7b4fda18ef2',
  '64eacbbb34fe0caf9d425fb7',
]
export const CORS_OPTIONS = {
  origin: (
    origin: string | undefined,
    callback: (
      err: Error | null,
      origin?:
        | boolean
        | string
        | RegExp
        | (boolean | string | RegExp)[]
        | undefined
    ) => void
  ) => {
    const ACCEPTED_ORIGINS = [
      'https://rockshop-api.onrender.com',
      'https://rock-shop-ecommerce.netlify.app/',
    ]

    if (ACCEPTED_ORIGINS.includes(origin as string)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by cors'))
  },
  credentials: true,
}
