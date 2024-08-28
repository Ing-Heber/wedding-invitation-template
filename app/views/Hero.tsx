'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useParallax } from '@/app/hooks/useParallax'
import { motion } from 'framer-motion'

export const Hero = () => {
    const heroRef = useRef(null)
    const {
        toGrow,
        toShrink,
        toRight: y,
    } = useParallax({
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
                    alt="Foto de Raquel y Miguel"
                    className="h-[164px] w-[170px]"
                    height={164}
                    src={'/raquel-miguel-logo.svg'}
                    width={170}
                />

                <Image
                    alt="Foto de arreglo floral"
                    className="h-32 w-52"
                    height={127}
                    src={'/hero-flower.svg'}
                    width={200}
                />

                <Image
                    alt="Foto fecha de boda"
                    className="h-[73px] w-[200px]"
                    height={73}
                    src={'/date.svg'}
                    width={200}
                />
            </motion.div>

            <div className="footer-image__container flex flex-col relative min-h-[223px] h-full w-full">
                <motion.div
                    className="h-[230px] mt-auto absolute left-0 right-0 bottom-0"
                    style={{
                        scale: toGrow,
                    }}
                >
                    <Image
                        alt="Arreglos florales"
                        className="h-full w-full mt-auto mx-auto"
                        fill
                        src={'/bottom-flowers.svg'}
                    />
                </motion.div>
                <div className="action__container flex flex-col items-center">
                    <motion.p
                        className="font-montserrat text-md uppercase text-mauve-mist tracking-[0.48px]"
                        style={{ y }}
                    >
                        swipe
                    </motion.p>
                    <Image
                        alt="Swipe icon"
                        className="bounce mt-[-10px] h-[96px] w-[79px]"
                        height={96}
                        src={'/swipe-icon.svg'}
                        width={79}
                    />
                </div>
            </div>
        </section>
    )
}
