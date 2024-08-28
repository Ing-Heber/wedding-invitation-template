import { BackgroundItems, SectionsList } from '@/app/components/'
import './components/main.css'
import './animations.css'

export default function Home() {
    return (
        <main className="relative">
            <BackgroundItems />
            <SectionsList />
            <div className="h-10 "></div>
        </main>
    )
}
