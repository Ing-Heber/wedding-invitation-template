import { RefObject } from 'react'
import { MotionValue, useScroll, useTransform } from 'framer-motion'

function useRight(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 0.5, 1], [distance, 0, distance])
}

function useLeft(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 0.5, 1], [-distance, 0, -distance])
}

function useSimpleRight(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 0.5, 1], [0, 0, distance])
}

function useScale(value: MotionValue<number>, size: number) {
    return useTransform(value, [0, 0.5, 1], [size, 1, size])
}

function useSimpleScale(value: MotionValue<number>, size: number) {
    return useTransform(value, [0, 0.5, 1], [1, 1, size])
}

interface UseParallaxProps {
    ref: RefObject<HTMLElement>
    distanceInline?: number
    distanceBlock?: number
    sizeToGrow?: number
    sizeToShrink?: number
}

export const useParallax = ({
    ref,
    distanceInline = 900,
    distanceBlock = 200,
    sizeToGrow = 1,
    sizeToShrink = 1,
}: UseParallaxProps) => {
    const { scrollYProgress } = useScroll({
        target: ref,
    })

    return {
        toRight: useRight(scrollYProgress, distanceInline),
        toBottom: useLeft(scrollYProgress, distanceBlock),
        toLeft: useLeft(scrollYProgress, distanceInline),
        toGrow: useScale(scrollYProgress, sizeToGrow),
        toShrink: useScale(scrollYProgress, sizeToShrink),
        simpleRight: useSimpleRight(scrollYProgress, distanceInline),
        simpleScale: useSimpleScale(scrollYProgress, sizeToGrow),
    }
}
