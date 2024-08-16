'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useParallax } from '@/app/hooks/useParallax'
import { Divider } from '../components/divider/Divider'
import { Button } from '../components/button/Button'

export const AssistanceForm = () => {
    const ref = useRef(null)
    const { toGrow, toRight: y } = useParallax({
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
                style={{ y }}
            >
                <form
                    className="flex flex-col items-center gap-6"
                    action="https://forms.gle/4GfcaDvu5cPiLQyj7"
                    target="_blank"
                >
                    <p className="font-montserrat font-thin text-center tracking-[0.48px] leading-[normal]">
                        ¡Estamos emocionados de que puedas unirte <br /> a
                        nosotros en nuestro día especial!
                    </p>

                    <p className="font-montserrat font-thin text-center tracking-[0.48px] leading-[normal]">
                        Por favor, confirma tu asistencia para que podamos
                        asegurar tu lugar en la celebración.
                    </p>

                    <Button btnType="default" className="w-[190px]">
                        Confirmar
                    </Button>
                </form>
            </motion.div>

            <motion.div
                className="w-full h-full relative"
                style={{ scale: toGrow }}
            >
                <Image
                    className="bottom-flowers mt-auto absolute left-0 right-0"
                    src={'/bottom-flowers.svg'}
                    fill
                    alt="Arreglos florales"
                />
            </motion.div>
        </section>
    )
}
