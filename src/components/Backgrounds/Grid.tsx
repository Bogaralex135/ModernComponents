import { HtmlHTMLAttributes } from 'react'
import { Colors } from '@/lib/types'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { validateTailwindColor } from '@/lib/validations'

export const gridBgVariants = cva('h-full w-full sticky inset-0 -z-10', {
  variants: {
    size: {
      sm: 'bg-[size:1rem_1rem]',
      md: 'bg-[size:3rem_3rem]',
      lg: 'bg-[size:6rem_6rem]',
      xl: 'bg-[size:8rem_8rem]',
      '2xl': 'bg-[size:10rem_10rem]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface GridProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridBgVariants> {
  color?: Colors
  className?: string
  gridColor?: Colors
}

/**
 * Renders a grid component with customizable size, color, and grid color.
 *
 * @param  size - The size of the grid. Default is md.
 * @param  color - The color of the grid. Default is white.
 * @param  gridColor - The color of the grid lines. Default is semi-transparent black.
 * @param  className - Additional CSS class names for the component.
 * @returns  The rendered grid component.
 */
export function Grid({
  className,
  size,
  color = '#fff',
  gridColor = '#00000020',
  ...props
}: GridProps): JSX.Element {
  return validateTailwindColor(color) ? (
    <div
      className={`${cn(gridBgVariants({ size }))} ${color} ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right,${gridColor} 1px,transparent 1px),linear-gradient(to bottom,${gridColor} 1px,transparent 1px)`,
      }}
      {...props}
    />
  ) : (
    <div
      className={`${cn(gridBgVariants({ size }))} ${className}`}
      style={{
        backgroundColor: color,
        backgroundImage: `linear-gradient(to right,${gridColor} 1px,transparent 1px),linear-gradient(to bottom,${gridColor} 1px,transparent 1px)`,
      }}
      {...props}
    />
  )
}
