'use client'

import React, { ReactNode } from 'react'
import '../main.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: 'default' | 'text'
    className?: string
    children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
    btnType = 'default',
    className,
    ...props
}) => (
    <button className={`${btnType} ${className || ''}`} {...props}>
        {props.children}
    </button>
)
