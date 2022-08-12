import React from 'react'
import './button.scss'

type Size = 'lg' | 'md' | 'sm' | 'xs'
type Variant = 'solid' | 'ghost' | 'text'

export type ButtonProps = {
  size?: Size
  variant?: Variant
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  children?: React.ReactNode
  onClick?: () => void
}

const generateClasses = ({
  variant = 'solid',
  size = 'lg',
  iconLeft,
  iconRight,
}: ButtonProps): string => {
  let buttonClass = `btn btn-${variant} btn-${size}`
  if (iconLeft) buttonClass += ' btn-icon btn-icon-left'
  if (iconRight) buttonClass += ' btn-icon btn-icon-right'
  return buttonClass
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  iconLeft,
  iconRight,
  children,
  ...defaultProps
}) => {
  return (
    <button
      className={generateClasses({ variant, size, iconLeft, iconRight })}
      {...defaultProps}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}

export default Button
