'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '@/app/hooks/useParallax'
import { Button, Divider } from '@/app/components'

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
                    alt="Foto nombre de Raquel y Miguel"
                    className="h-[160px] w-[334px]"
                    height={160}
                    src={'/logo.svg'}
                    width={334}
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

                    <Button
                        type="submit"
                        btnType="default"
                        className="w-[190px]"
                    >
                        Confirmar
                    </Button>
                </form>
            </motion.div>

            <motion.div
                className="w-full h-full relative"
                style={{ scale: toGrow }}
            >
                <Image
                    alt="Arreglos florales"
                    className="bottom-flowers mt-auto mx-auto"
                    fill
                    src={'/bottom-flowers.svg'}
                />
            </motion.div>
        </section>
    )
}
