'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '@/app/hooks/useParallax'
import { Divider } from '@/app/components/'

export const Reminders = () => {
    const ref = useRef(null)
    const { simpleRight: simpleTop, simpleScale } = useParallax({
        ref: ref,
        distanceInline: 300,
        sizeToGrow: 1.2,
    })

    return (
        <section className="reminders section__container pt-4 px-[17px]">
            <div ref={ref} className="scroll__container" />

            <motion.h2
                style={{ y: simpleTop, scale: simpleScale }}
                className="text-[38px] font-normal leading-normal text-center"
            >
                Recordatorios Finales
            </motion.h2>

            <Divider className="my-2" />

            <motion.div
                className="flex flex-col gap-3 reminders-list"
                style={{ y: simpleTop, scale: simpleScale }}
            >
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    Por favor ir bien bañaditos <br /> y perfumados, pero no más
                    que <br />
                    los novios 🤵🏻👰🏻‍♀️
                </p>
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    Asistir con toda la actitud <br />
                    para bailar hasta que se te <br />
                    hinchen los pies 💃🏻🕺🏻
                </p>
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    Recuerda que el ambiente <br />
                    lo hacemos todos, así que coopera <br />y no te quedes
                    sentado 🥳🎉🎊
                </p>
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    La comida es para disfrutarse <br />
                    con nosotros, asi que <br />
                    no te la lleves para después 😉🍽️
                </p>
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    Ya sabemos que <br />
                    con tu presencia basta <br />
                    pero déjanos sentir tu aprecio 🎁🛍️
                </p>
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    Hemos elegido a cada uno de ustedes <br />
                    por el aprecio que sentimos <br />
                    y con mucho tiempo de antelación, <br />
                    por favor no nos falles 📅
                </p>
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    No olvides ser modesto <br />
                    y tener buen juicio al elegir <br />
                    tu atuendo 👗👔
                </p>
                <p className="text-xs font-thin font-montserrat text-center tracking-[0.383px]">
                    Evita los colores blanco, púrpura y gris; <br />
                    ya que serán propios de los novios ⚪⚪️🟣
                </p>
            </motion.div>
        </section>
    )
}
