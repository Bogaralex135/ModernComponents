import { Colors } from '@/lib/types'
import styles from '@/styles/TextReveal.module.css'

interface Props {
  children: string
  textColor?: Colors
  bgTextColor?: Colors
  className?: string
  gradient?: boolean
  gradientColor1?: Colors
  gradientColor2?: Colors
}

export function TextReveal({
  children,
  textColor,
  bgTextColor,
  className,
  gradient,
  gradientColor1,
  gradientColor2,
  ...props
}: Props): JSX.Element {
  return (
    <div
      className={`${className} ${styles.textReveal}`}
      style={{
        color: bgTextColor,
        backgroundImage: `${
          gradient
            ? `linear-gradient(90deg, ${gradientColor1}, ${gradientColor2})`
            : `linear-gradient(90deg, ${textColor}, ${textColor})`
        }`,
      }}
      {...props}>
      <span>{children}</span>
    </div>
  )
}
