import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'text-slide': 'text-slide 12s  infinite linear',
      },
      keyframes: {
        'text-slide': {
            '0%': {
                transform: 'translateX(10%)',
            },
            '100%': {
                transform: 'translateX(-125%)',
            },
        },                    
      },
      fontFamily: {
        body: ['Sedgwick Ave Display'],
        alkatra: ['Alkatra']
      },
    },
  },
  plugins: [],
}
export default config
