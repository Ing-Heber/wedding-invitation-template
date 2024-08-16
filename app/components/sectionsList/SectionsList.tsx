'use client'
import { Hero } from '@/app/views/Hero'
import { ImageWithText, ImageWithText2 } from '@/app/views/ImageWithText'
import { Directions } from '@/app/views/Directions'
import { Reminders } from '@/app/views/Reminders'
import { motion } from 'framer-motion'
import { Conclusion } from '@/app/views/Conclusion'
import { AssistanceForm } from '@/app/views/AssistanceForm'

const Sections = [
    <Hero key={'Section-1'} />,
    <ImageWithText key={'Section-2'} />,
    <ImageWithText2 key={'Section-3'} />,
    <Directions key={'Section-4'} />,
    <AssistanceForm key={'Section-5'} />,
    <Reminders key={'Section-6'} />,
    <Conclusion key="Section-7" />,
]

export const SectionsList = () => {
    return (
        <motion.div initial={false}>
            {Sections.map((section) => section)}
        </motion.div>
    )
}
