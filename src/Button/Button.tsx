import React, { forwardRef } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

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
        [styles['btn']]: 1,
        [styles[`btn-${color}`]]: color,
        [styles['is-rounded']]: isRounded,
        className: className,
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
