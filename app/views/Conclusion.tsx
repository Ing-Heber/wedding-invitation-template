'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '@/app/hooks/useParallax'
import { Button, Divider, Text } from '../components/'

export const Conclusion = () => {
    const [scrollSnapType, setScrollSnapType] = useState<'center' | 'none'>('center');
    const ref = useRef(null)
    const { simpleRight: simpleTop, simpleScale } = useParallax({
        ref: ref,
        distanceInline: 300,
        sizeToGrow: 1.9,
    })

    const scrollToTop = () => {
        setScrollSnapType('none')

        setTimeout(() => {
            window.scrollTo({ top: 100, left: 0, behavior: 'smooth' })
        }, 10)

        setTimeout(() => {
            setScrollSnapType('center')
        }, 1000)
    }

    return (
        <section className="conclusion section__container pt-6 px-[17px] gap-5 h-[90vh]" style={{ scrollSnapAlign: scrollSnapType }}>
            <div ref={ref} className="scroll__container" />
            <motion.div
                className="flex flex-col gap-5 h-fit"
                style={{ y: simpleTop, scale: simpleScale }}
            >
                <Image
                    alt="Foto de Raquel y Miguel"
                    className="portrait__img h-[200px] w-[220px]"
                    height={200}
                    src={'/Image_3.png'}
                    width={220}
                />

                <div className="flex flex-col gap-3">
                    <Text
                        className="my-12"
                        header="El Cantar de los Cantares 8:6 "
                        content={
                            '"Ponme como sello sobre tu corazón, como un sello sobre tu brazo, porque el amor es tan fuerte como la muerte".'
                        }
                    />
                </div>
            </motion.div>

            <Divider />

            <motion.div style={{ scale: simpleScale }}>
                <Image
                    alt="Raquel y Miguel Logo"
                    className="logo h-[130px] w-[234px]"
                    height={130}
                    src={'/logo.svg'}
                    width={234}
                />
            </motion.div>

            <Button onClick={scrollToTop} btnType="text">
                Volver a empezar
            </Button>
        </section>
    )
}
