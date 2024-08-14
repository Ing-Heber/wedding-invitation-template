'use client'
import Image from 'next/image'
import { useParallax } from '@/app/hooks/useParallax'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'

export const Hero = () => {
    const heroRef = useRef(null)
    const { toGrow, toShrink, toRight, toLeft, toBottom } = useParallax({
        ref: heroRef,
        distanceInline: 400,
        distanceBlock: 100,
        sizeToShrink: 0.8,
        sizeToGrow: 1.5,
    })
    return (
        <section className="section__container hero">
            <div className="scroll__container" ref={heroRef} />
            <motion.div
                className="flex flex-col items-center gap-9 pt-10 hero__header"
                style={{ scale: toShrink }}
            >
                <Image
                    className="w-full"
                    src={'/raquel-miguel-logo.svg'}
                    width={170}
                    height={164}
                    alt="Foto de Raquel y Miguel"
                />

                <Image
                    src={'/hero-flower.svg'}
                    width={200}
                    height={127}
                    alt="Foto de arreglo floral"
                />

                <Image
                    src={'/date.svg'}
                    width={200}
                    height={73}
                    alt="Foto fecha de boda"
                />
            </motion.div>

            <div className="flex flex-col relative min-h-[223px] h-full justify-center w-full">
                <motion.div
                    className="h-full w-full absolute left-0 right-0 bottom-0"
                    style={{
                        scale: toGrow,
                    }}
                >
                    <Image
                        className="h-full w-full"
                        src={'/bottom-flowers.svg'}
                        height={500}
                        width={393}
                        alt="Arreglos florales"
                    />
                </motion.div>
                <div className="flex flex-col items-center">
                    <motion.p
                        className="font-montserrat text-md uppercase text-mauve-mist tracking-[0.48px]"
                        style={{ y: toRight }}
                    >
                        swipe
                    </motion.p>
                    <Image
                        className="bounce mt-[-10px]"
                        src={'/swipe-icon.svg'}
                        width={79}
                        height={96}
                        alt="Swipe icon"
                    />
                </div>
            </div>
        </section>
    )
}
