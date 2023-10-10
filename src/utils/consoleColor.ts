import { ANSIColors, ANSIColorsEnums } from '../types'

const colors: ANSIColors = {
  red: '91',
  green: '92',
  cyan: '96',
  yellow: '93',
}

/**
 * @param message the message to log
 * @param color one of the following: cyan | yellow | green | red
 */
export function consoleColor(message: any, color: ANSIColorsEnums) {
  console.log(`\x1b[${colors[color]}m ${message} \x1b[0m`)
}
