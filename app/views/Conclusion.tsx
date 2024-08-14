import Image from 'next/image'
import { Divider } from '../components/divider/Divider'
import { Button } from '../components/button/Button'
import { Text } from '../components/text/Text'
import React, { useRef } from 'react'
import { useParallax } from '@/app/hooks/useParallax'
import { motion } from 'framer-motion'

export const Conclusion = () => {
    const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js
    const ref = useRef(null)
    const { simpleRight: simpleTop, simpleScale } = useParallax({
        ref: ref,
        distanceInline: 300,
        sizeToGrow: 1.9,
    })

    function scrollToTop() {
        if (!isBrowser()) return
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <section className="conclusion section__container pt-4 px-[17px]">
            <div ref={ref} className="scroll__container" />
            <motion.div
                className="flex flex-col gap-12"
                style={{ y: simpleTop, scale: simpleScale }}
            >
                <Image
                    className="portrait__img w-full"
                    src={'/Image_3.png'}
                    width={200}
                    height={168}
                    alt="Foto de Raquel y Miguel"
                />

                <div>
                    <Text
                        className="my-12"
                        header="El Cantar de los Cantares 4:9"
                        content={
                            '"(...) con tan solo una mirada de\n esos ojos tuyos, me has robado\n el corazón"'
                        }
                    />
                </div>
            </motion.div>

            <Divider className="my-4" />

            <motion.div style={{ scale: simpleScale }}>
                <Image
                    src={'/logo.svg'}
                    width={234}
                    height={60}
                    alt="Foto nombre de Raquel y Miguel"
                />
            </motion.div>

            <Button
                onClick={() => scrollToTop()}
                className="mt-[32px]"
                btnType="text"
            >
                Volver a empezar
            </Button>
        </section>
    )
}
