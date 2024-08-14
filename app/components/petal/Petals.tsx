import { FC } from 'react'
import { Petal } from '@/app/components/petal/Petal'

export const Petals:FC = () => {
    return <div className="fixed flex gap-6 inset-0 justify-between max-w-full overflow-hidden z-10">
        <div className="absolute bottom-full flex gap-5 h-fit justify-between w-fit">
            <Petal className="fall--right mt-7" />
            <Petal className="fall mt-[-100px]" />
            <Petal className="fall--right mt-2 mr-5 ml-4" />
        </div>
        <div className="absolute bottom-full flex gap-5 h-fit justify-between left-1/3 w-fit">
            <Petal className="fall mt-10 mr-5" />
            <Petal className="fall--left mt-5" />
            <Petal className="fall--left mt-[200px] ml-2" />
        </div>
        <div className="absolute bottom-full flex gap-5 h-fit justify-between left-2/3 w-fit">
            <Petal className="fall--right mt-[-150px]" />
            <Petal className="fall mt-4" />
            <Petal className="fall--right mt-7 mr-5 ml-4" />
        </div>
    </div>
}