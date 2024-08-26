import { motion } from 'framer-motion'
import { AudioPlayer } from '@/app/components'
import {
    AssistanceForm,
    Conclusion,
    Directions,
    Hero,
    ImageWithText,
    ImageWithText2,
    Reminders,
} from '@/app/views'

export const SectionsList = () => {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <Hero />
            <ImageWithText />
            <ImageWithText2 />
            <Directions />
            <AssistanceForm />
            <Reminders />
            <Conclusion />
            <AudioPlayer id={'song'} src={'/LOVE.mp3'} />
        </motion.div>
    )
}
