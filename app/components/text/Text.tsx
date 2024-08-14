'use client'
import { FC } from 'react'
import '../main.css'

interface TextProps {
    className?: string
    content: string
    header: string
}

export const Text: FC<TextProps> = ({ className, content, header }) => {
    return (
        <>
            <p className="text__content text-[18px] font-normal text-center leading-[normal] tracking-[0.54px]">
                {content}
            </p>
            <h4 className="text__header text-[20px] text-mauve-mist font-black tracking-[0.6px] text-center">
                {header}
            </h4>
        </>
    )
}
