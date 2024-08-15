'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useParallax } from '@/app/hooks/useParallax'
import { motion } from 'framer-motion'
import { Text } from '@/app/components/text/Text'

export const ImageWithText = () => {
    const ref = useRef(null)
    const {
        toRight: x,
        toLeft,
        toBottom,
    } = useParallax({
        ref: ref,
        distanceInline: 300,
        distanceBlock: 100,
    })

    return (
        <section className="section__container px-4 pt-6 image-with-text">
            <div className="scroll__container" ref={ref} />
            <Image
                alt="Foto de Raquel y Miguel"
                className="portrait__img"
                height={315}
                src={'/Image_1.png'}
                width={357}
            />

            <motion.div
                className="text__container flex flex-col gap-[12px] my-12"
                style={{ y: toBottom, x }}
            >
                <Text
                    className="my-[51px]"
                    header="Mateo 19:6"
                    content={
                        '"Así que ya no son dos,\n sino una sola carne. Por lo\n tanto, lo que Dios ha\n unido, que no lo separe\n ningún hombre"'
                    }
                />
            </motion.div>
            <motion.div style={{ y: toBottom, x: toLeft }}>
                <Image
                    src={'/flower.svg'}
                    width={61}
                    height={47.9}
                    alt="Foto de arreglo floral"
                />
            </motion.div>
        </section>
    )
}

export const ImageWithText2 = () => {
    const ref = useRef(null)
    const { toRight, toLeft, toBottom } = useParallax({
        ref: ref,
        distanceInline: 300,
        distanceBlock: 100,
    })

    return (
        <section className="section__container px-4 pt-6 image-with-text">
            <div className="scroll__container" ref={ref} />
            <Image
                alt="Foto de Raquel y Miguel"
                className="portrait__img"
                height={315}
                src={'/Image_2.png'}
                width={357}
            />

            <motion.div
                className="text__container flex flex-col gap-[12px] my-12"
                style={{ y: toBottom, x: toLeft }}
            >
                <Text
                    className="my-[51px]"
                    header="El Cantar de los Cantares 4:9"
                    content={
                        '"(...) con tan solo una\n mirada de esos ojos tuyos,\n me has robado el corazón"'
                    }
                />
            </motion.div>
            <motion.div style={{ y: toBottom, x: toRight }}>
                <Image
                    src={'/double-flower.svg'}
                    width={119}
                    height={38}
                    alt="Foto de arreglos florales"
                />
            </motion.div>
        </section>
    )
}
