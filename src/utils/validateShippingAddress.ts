import { SchemaValidation } from '../types'
import { validateSingleString } from './validateSingleString'

type KeyEnums = 'address' | 'city' | 'postalCode' | 'country'

export function validateShippingAddress(value: any): SchemaValidation {
  let message = ''
  let isValid = true

  const requiredKeys: KeyEnums[] = ['address', 'city', 'postalCode', 'country']

  const isAnObject =
    typeof value === 'object' && value !== null && !Array.isArray(value)

  if (!isAnObject) {
    message = 'field shippingAddress must be an object'
    isValid = false
  }

  requiredKeys.forEach((key: KeyEnums) => {
    if (!requiredKeys.includes(key)) {
      message = `key ${key} must be present in the object`
      isValid = false
    }
  })

  const addressValidation = validateSingleString(value.address, 2, 'address')
  const cityValidation = validateSingleString(value.city, 2, 'city')
  const postalCodeValidation = validateSingleString(
    value.postalCode,
    2,
    'postalCode'
  )
  const countryValidation = validateSingleString(value.country, 2, 'country')

  if (!addressValidation.isValid) {
    message = addressValidation.message
    isValid = false
  }

  if (!cityValidation.isValid) {
    message = cityValidation.message
    isValid = false
  }

  if (!postalCodeValidation.isValid) {
    message = postalCodeValidation.message
    isValid = false
  }

  if (!countryValidation.isValid) {
    message = countryValidation.message
    isValid = false
  }

  return {
    message,
    isValid,
  }
}
