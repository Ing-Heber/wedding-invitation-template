'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '@/app/hooks/useParallax'
import { Button, Divider } from '@/app/components'

export const Directions = () => {
    const ref = useRef(null)
    const { simpleRight: simpleTop, simpleScale } = useParallax({
        ref: ref,
        distanceInline: 300,
        sizeToGrow: 1.5,
    })
    return (
        <section className="section__container gap-2 pt-6 directions">
            <div ref={ref} className="scroll__container" />
            <motion.div style={{ y: simpleTop, scale: simpleScale }}>
                <Image
                    className="portrait__img h-[155px] w-[300px]"
                    src={'/logo.svg'}
                    width={300}
                    height={155}
                    alt="Foto nombre de Raquel y Miguel"
                />
            </motion.div>

            <Divider className="my-4 px-4" />

            <motion.div
                className="flex flex-col w-full justify-center gap-6"
                style={{ scale: simpleScale }}
            >
                <div className="iframe">
                    <Image
                        className="map rounded-[25px] mx-auto h-[188px] w-[250px]"
                        src={'/map.svg'}
                        width={250}
                        height={188}
                        alt="Foto nombre de Raquel y Miguel"
                    />
                </div>

                <p className="font-montserrat font-thin text-center tracking-[0.48px] leading-[normal]">
                    Av. Nte. Del Comercios, <br />
                    Priv. &quot;A&quot;, Monte #8 San Agustín,
                    <br /> San Juan Ixtayopan, 13540 <br /> Ciudad de México.
                </p>

                <form
                    className="flex justify-center w-full"
                    action="https://maps.app.goo.gl/vnQqUAHo3fsquUFD8?g_st=com.google.maps.preview.copy"
                    target="_blank"
                >
                    <Button type="submit" btnType="default">
                        Como llegar
                    </Button>
                </form>
            </motion.div>
        </section>
    )
}
