import { HtmlHTMLAttributes } from 'react'
import { Colors } from '@/lib/types'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const gridBgVariants = cva('h-full w-full sticky inset-0 -z-10', {
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

interface Props
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridBgVariants> {
  color?: Colors
  className?: string
}

/**
 * Renders a grid background component.
 *
 * @param {object} props - The component properties.
 * @param {string} props.className - The additional class name for styling.
 * @param {string} props.size - The size of the grid background.
 * @param {string} props.color - The color of the grid background.
 * @returns {JSX.Element} The rendered grid background component.
 */
function GridBg({ className, size, color, ...props }: Props): JSX.Element {
  return (
    <div
      className={`${cn(
        gridBgVariants({
          size,
        })
      )} ${color} ${className} bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]`}
      {...props}
    />
  )
}

export { GridBg, gridBgVariants }
