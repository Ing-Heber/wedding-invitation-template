'use client'
import { Hero } from '@/app/views/Hero'
import { ImageWithText, ImageWithText2 } from '@/app/views/ImageWithText'
import { AssistanceForm } from '@/app/views/AssistanceForm'
import { Directions } from '@/app/views/Directions'
import { Reminders } from '@/app/views/Reminders'
import { motion } from 'framer-motion'
import { Conclusion } from '@/app/views/Conclusion'

const Sections = [
    <Hero key={'Section-1'} />,
    <ImageWithText key={'Section-2'} />,
    <ImageWithText2 key={'Section-3'} />,
    <AssistanceForm key={'Section-4'} />,
    <Directions key={'Section-5'} />,
    <Reminders key={'Section-6'} />,
    <Conclusion key="Section-7" />,
]

export const SectionsList = () => {
    return (
        <motion.div initial={false}>
            {Sections.map((section, index) => (
                <motion.div
                    key={index}
                    animate={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    {section}
                </motion.div>
            ))}
        </motion.div>
    )
}
