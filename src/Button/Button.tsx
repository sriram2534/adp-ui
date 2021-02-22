import React, { forwardRef } from 'react'
import cn from 'classnames'

export type ButtonProps = {
  onClickHandler?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  children: React.ReactNode
  color?: string
  isRounded?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isFullWidth?: boolean
  disabled?: boolean
  display?: 'block' | 'inline'
} & React.HTMLAttributes<HTMLButtonElement>

export type BtnRef = HTMLButtonElement

const ButtonComponent: React.ForwardRefRenderFunction<BtnRef, ButtonProps> = (props, ref) => {
  const {
    onClickHandler,
    children,
    startIcon,
    endIcon,
    color,
    isRounded,
    className,
    disabled,
    size,
    isFullWidth,
    display,
    ...rest
  } = props

  const btnClass = cn({
    btn: 1,
    'is-rounded': isRounded,
    [`btn__btn--${color}`]: color,
    disabled: disabled,
    [`${size}`]: size,
    'is-full-width': isFullWidth,
    [`display-${display}`]: display,
    className: className,
  })

  console.log(btnClass)

  return (
    <button ref={ref} className={btnClass} onClick={onClickHandler} {...rest}>
      {!!startIcon && <span className={'btn__start-icon'}>{startIcon}</span>}
      {!!children && <span>{children}</span>}
      {!!endIcon && <span className={'btn__end-icon'}>{endIcon}</span>}
    </button>
  )
}

export default forwardRef(ButtonComponent)

// "directories": {
//     "lib": "lib"
// },
// "files": [
//     "lib"
// ],
// "main": "lib/index.js"
// "homepage": "https://github.com/sriram2534/adp-ui.git",
// "repository": {
//     "type": "git",
//     "url": "https://github.com/sriram2534/adp-ui.git"
// },
