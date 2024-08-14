import { FC, InputHTMLAttributes } from 'react'
import '../main.css'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const inputStyles =
    'placeholder:font-montserrat placeholder:text-pearl-blush placeholder: opacity-50 placeholder: text-sm placeholder: trackin-[0.42px] font-montserrat text-pearl-blush text-sm  trackin-[0.42px]'

export const InputText: FC<InputTextProps> = ({ className, ...props }) => {
    return (
        <div className="border-b-[1px] pb-[2px] px-2 w-fit max-w-[283px] mx-auto">
            <input
                className={`input--text bg-transparent w-[220px] ${inputStyles}  ${className || ''}`}
                {...props}
            />
        </div>
    )
}
