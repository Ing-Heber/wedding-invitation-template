import { FC } from 'react'
import Image from 'next/image'

interface PetalProps {
    className?: string
}

export const Petal: FC<PetalProps> = ({ className }) => {
    return (
        <Image
            className={`${className ? className : ''} h-4 w-[13px]`}
            src={'./petal.svg'}
            height={16}
            width={13}
            alt="Pétalo"
        />
    )
}
