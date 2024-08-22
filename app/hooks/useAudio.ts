import { ReactElement, useEffect, useState } from 'react'

interface useAudioProps {
    id: string
    audioPlayer: any
}

export const useAudio = ({ id, audioPlayer }: useAudioProps) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        if (isPlaying) {
            setIsPlaying(false)
            return audioPlayer.current?.pause()
        }

        setIsPlaying(true)
        return audioPlayer.current?.play()
    }

    const onPlaying = () => {
        if (audioPlayer.current?.paused) setIsPlaying(false)
    }

    return {
        isPlaying,
        handleClick,
        onPlaying,
    }
}
