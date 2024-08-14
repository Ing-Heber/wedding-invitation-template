import { FC } from 'react'

interface DividerProps {
    className?: string
}

export const Divider: FC<DividerProps> = ({ className }) => {
    return (
        <div
            className={`divider__container flex items-center min-h-[21px] w-full relative ${className || ''}`}
        >
            <div className="absolute left-[45%] h-[21px] w-[21px] border-[1px] border-mauve-mist radius rounded-full" />
            <hr className="h-[1px] bg-mauve-mist border-[0px] w-full" />
            <div className="absolute left-[48%] h-[19px] w-[19px] border-[1px] border-mauve-mist radius rounded-full" />
        </div>
    )
}
