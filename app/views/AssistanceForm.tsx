'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useParallax } from '@/app/hooks/useParallax'
import { Divider } from '../components/divider/Divider'
import { Button } from '../components/button/Button'

export const AssistanceForm = () => {
    const ref = useRef(null)
    const { toGrow, toRight, toLeft } = useParallax({
        ref: ref,
        distanceInline: 400,
        sizeToGrow: 1.5,
    })

    return (
        <section className="section__container pt-8 assistance-form">
            <div className="scroll__container" ref={ref} />
            <motion.div style={{ scale: toGrow }}>
                <Image
                    src={'/logo.svg'}
                    width={334}
                    height={160}
                    alt="Foto nombre de Raquel y Miguel"
                />
            </motion.div>

            <Divider className="my-8 w-full px-4" />

            <motion.div
                className="w-full"
                transition={{ duration: 10 }}
                style={{ y: toRight }}
            >
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    Por favor escribe tu nombre o el de tu <br />
                    familia
                    <br />
                    para confirmar tu asistencia.
                </p>

                <form
                    className="flex flex-col items-center gap-8 mt-12 mb-8"
                    action="https://forms.gle/4GfcaDvu5cPiLQyj7"
                    target="_blank"
                >
                    <Button className="text-sm w-fit">Confirmar</Button>
                </form>
            </motion.div>

            <motion.div
                className="w-full h-full relative"
                style={{ scale: toGrow }}
            >
                <Image
                    className="mt-auto absolute left-0 right-0"
                    src={'/bottom-flowers.svg'}
                    fill
                    alt="Foto nombre de Raquel y Miguel"
                />
            </motion.div>
        </section>
    )
}
