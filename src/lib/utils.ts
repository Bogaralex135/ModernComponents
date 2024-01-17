import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A function that generates a class name based on the input class values.
 *
 * @param inputs - An array of class values.
 * @return The generated class name.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
