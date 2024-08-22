import { FC, useRef, useState } from 'react'
import Image from 'next/image'
import { useAudio } from '@/app/hooks/useAudio'

interface AudioPlayerProps extends React.HTMLAttributes<HTMLAudioElement> {
    id: string
    src: string
}

export const AudioPlayer: FC<AudioPlayerProps> = ({ id, src }) => {
    const audioPlayer = useRef<HTMLAudioElement>(null)
    const { isPlaying, handleClick, onPlaying } = useAudio({ id, audioPlayer })

    return (
        <>
            <div
                className="bottom-5 right-5 cursor-pointer fixed z-50"
                onClick={handleClick}
            >
                {isPlaying ? (
                    <Image
                        alt={'Play'}
                        height={24}
                        src={'/sound.png'}
                        width={24}
                    />
                ) : (
                    <Image
                        alt={'Pause'}
                        height={24}
                        src={'/no-sound.png'}
                        width={24}
                    />
                )}
            </div>
            <audio
                ref={audioPlayer}
                id={id}
                onTimeUpdate={onPlaying}
                loop
                src={src}
            >
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </>
    )
}
