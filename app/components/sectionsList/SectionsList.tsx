import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Hero } from '@/app/views'
import { AudioPlayer } from '@/app/components'

const AssistanceForm = dynamic(() =>
    import('@/app/views/AssistanceForm').then((mod) => mod.AssistanceForm)
)
const Conclusion = dynamic(() =>
    import('@/app/views/Conclusion').then((mod) => mod.Conclusion)
)

const Directions = dynamic(() =>
    import('@/app/views/Directions').then((mod) => mod.Directions)
)

const ImageWithText = dynamic(() =>
    import('@/app/views/ImageWithText').then((mod) => mod.ImageWithText)
)

const ImageWithText2 = dynamic(() =>
    import('@/app/views/ImageWithText').then((mod) => mod.ImageWithText2)
)

const Reminders = dynamic(() =>
    import('@/app/views/Reminders').then((mod) => mod.Reminders)
)

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
