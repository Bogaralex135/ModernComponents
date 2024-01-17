export type CSSColor =
  | `#${string}`
  | `hsl(${string})`
  | `hsla(${string})`
  | `rgb(${string})`
  | `rgba(${string})`

export type TailwindColor =
  | `${string}-${string}`
  | `${string}-${string}-${string}`

export type Colors = CSSColor | TailwindColor
