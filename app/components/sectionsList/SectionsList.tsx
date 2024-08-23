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
        <motion.div className="relative" initial={false}>
            {Sections.map((section) => section)}
            <AudioPlayer key={'Section-0'} id={'song'} src={'/LOVE.mp3'} />
        </motion.div>
    )
}
