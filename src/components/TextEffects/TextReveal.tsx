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
/**
 * Renders a text reveal component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be revealed.
 * @param {string} props.textColor - The color of the text.
 * @param {string} props.bgTextColor - The color of the background text.
 * @param {string} props.className - The CSS class name for the component.
 * @param {boolean} props.gradient - Whether to use a gradient background.
 * @param {string} props.gradientColor1 - The first color of the gradient background.
 * @param {string} props.gradientColor2 - The second color of the gradient background.
 * @returns {JSX.Element} The rendered text reveal component.
 */
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
      {children}
    </div>
  )
}
