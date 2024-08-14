'use client'
import Image from 'next/image'
import { Divider } from '@/app/components/divider/Divider'
import { Button } from '../components/button/Button'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useParallax } from '@/app/hooks/useParallax'

export const Directions = () => {
    const ref = useRef(null)
    const { simpleRight: simpleTop, simpleScale } = useParallax({
        ref: ref,
        distanceInline: 300,
        sizeToGrow: 1.5,
    })
    return (
        <section className="section__container gap-10 pt-20">
            <div ref={ref} className="scroll__container" />
            <motion.div style={{ y: simpleTop, scale: simpleScale }}>
                <Image
                    className="mt-[30px]"
                    src={'/logo.svg'}
                    width={334}
                    height={160}
                    alt="Foto nombre de Raquel y Miguel"
                />
            </motion.div>

            <Divider className="my-[49px] px-4" />

            <motion.div
                className="flex flex-col w-full justify-center"
                style={{ scale: simpleScale }}
            >
                <div className="iframe">
                    <Image
                        className="rounded-[25px] mx-auto"
                        src={'/map.svg'}
                        width={273}
                        height={188}
                        alt="Foto nombre de Raquel y Miguel"
                    />
                </div>

                <p className="font-montserrat font-thin my-[24px] text-center tracking-[0.48px] leading-[normal]">
                    Av. Nte. Del Comercios, <br />
                    Priv. &quot;A&quot;, Monte #8 San Agustín,
                    <br /> San Juan Ixtayopan, 13540 <br /> Ciudad de México.
                </p>

                <Button className="m-auto" btnType="default">
                    Como llegar
                </Button>
            </motion.div>
        </section>
    )
}
