import React, { forwardRef } from 'react'
import cn from 'classnames'

export interface ButtonProps {
  onClickHandler?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  children: React.ReactNode
  color?: string
  isRounded?: boolean
  className?: string
}

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
    ...rest
  } = props

  const btnClass = cn({
    btn: 1,
    'is-rounded': isRounded,
    [`btn__btn--${color}`]: color,
  })

  return (
    <button ref={ref} className={btnClass} onClick={onClickHandler} {...rest}>
      <span>{startIcon}</span>
      <span>{children}</span>
      <span>{endIcon}</span>
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
