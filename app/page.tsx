'use client'
import './animations.css'
import './components/main.css'
import { SectionsList } from './components/sectionsList/SectionsList'
import { BackgroundItems } from '@/app/components/background/BackgroundItems'

export default function Home() {
    return (
        <main className="relative">
            <BackgroundItems />
            <SectionsList />
        </main>
    )
}
