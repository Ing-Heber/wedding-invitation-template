import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            playfairDisplay: ['Playfair Display', 'serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'rose-quartz-mist': '#EFD5E0',
                'midnight-plum': '#463047',
                'lavender-slate': '#7C5A7B',
                'mauve-mist': '#917492',
                'lilac-whisper': '#C7AAC8',
                'pearl-blush': '#ddd2da',
            },
        },
    },
    plugins: [],
}
export default config
