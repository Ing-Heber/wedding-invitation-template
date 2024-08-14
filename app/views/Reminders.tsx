'use client'
import { Divider } from '@/app/components/divider/Divider'
import { useRef } from 'react'
import { useParallax } from '@/app/hooks/useParallax'
import { motion } from 'framer-motion'

export const Reminders = () => {
    const ref = useRef(null)
    const { simpleRight: simpleTop, simpleScale } = useParallax({
        ref: ref,
        distanceInline: 300,
        sizeToGrow: 1.2,
    })

    return (
        <section className="section__container pt-[89px] pb-[29px] px-[17px]">
            <div ref={ref} className="scroll__container" />

            <motion.h2
                style={{ y: simpleTop, scale: simpleScale }}
                className="text-[38px] font-normal leading-normal text-center"
            >
                Recordatorios Finales
            </motion.h2>

            <Divider className="my-6" />

            <div className="flex flex-col gap-7">
                <motion.p
                    style={{ y: simpleTop, scale: simpleScale }}
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                >
                    Por favor ir bien bañaditos <br /> y perfumados, pero no más
                    que <br />
                    los novios 🤵🏻👰🏻‍♀️
                </motion.p>
                <motion.p
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                    style={{ y: simpleTop, scale: simpleScale }}
                >
                    Asistir con toda la actitud <br />
                    para bailar hasta que se te <br />
                    hinchen los pies 💃🏻🕺🏻
                </motion.p>
                <motion.p
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                    style={{ y: simpleTop, scale: simpleScale }}
                >
                    Recuerda que el ambiente <br />
                    lo hacemos todos, así que coopera <br />y no te quedes
                    sentado 🥳🎉🎊
                </motion.p>
                <motion.p
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                    style={{ y: simpleTop, scale: simpleScale }}
                >
                    La comida es para disfrutarse <br />
                    con nosotros, asi que <br />
                    no te la lleves para después 😉🍽️
                </motion.p>
                <motion.p
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                    style={{ y: simpleTop, scale: simpleScale }}
                >
                    Ya sabemos que <br />
                    con tu presencia basta <br />
                    pero déjanos sentir tu aprecio 🎁🛍️
                </motion.p>
                <motion.p
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                    style={{ y: simpleTop, scale: simpleScale }}
                >
                    Hemos elegido a cada uno de ustedes <br />
                    por el aprecio que sentimos <br />
                    y con mucho tiempo de antelación, <br />
                    por favor no nos falles 📅
                </motion.p>
                <motion.p
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                    style={{ y: simpleTop, scale: simpleScale }}
                >
                    No olvides ser modesto <br />
                    y tener buen juicio al elegir <br />
                    tu atuendo 👗👔
                </motion.p>
                <motion.p
                    className="text-xs font-thin font-montserrat text-center tracking-[0.383px]"
                    style={{ y: simpleTop, scale: simpleScale }}
                >
                    Evita los colores blanco, púrpura y gris; <br />
                    ya que serán propios de los novios ⚪⚪️🟣
                </motion.p>
            </div>
        </section>
    )
}
