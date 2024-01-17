import { Colors } from './types'

/**
 * Validates a Tailwind color.
 *
 * @param color - The color to validate.
 * @return True if the color is a valid Tailwind color, false otherwise.
 */

export function validateTailwindColor(color: Colors) {
  return color.startsWith('bg-')
}
