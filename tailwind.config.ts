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
        'carousel3-2': 'slide3-2 2s ease-out',
        'carousel2-1': 'slide2-1 2s ease-out',
        'carousel1-out': 'slide1-out 2s ease-out',
        'carouselOut-3': 'slideout-3 2s ease-out',
        'carousel2-3': 'slide2-3 2s ease-out',
        'carousel1-2': 'slide1-2 2s ease-out',
        'carouselOut-1': 'slideout-1 2s ease-out',
        'carousel3-out': 'slide3-out 2s ease-out',
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
          

        'slide3-2': {
          '0%': {
            transform: 'translateX(0) skewY(-12deg) translateY(-30px)',
            },
          '100%': {
            transform: 'translateX(-120%) skewY(0deg) translateY(0)',
            },
        },
        'slide2-1': {
          '0%': {
            transform: 'skewY(0) translateX(0%) translateY(0)',
            },
          '100%': {
            transform: ' skewY(12deg) translateX(-120%) translateY(30px)',
            },
        }, 
        'slide1-out': {
          '0%': {
            transform: 'skewY(12deg) translateX(0) translateY(-30px) ',
            opacity: "100",
            },
          '100%': {
            transform: 'skewY(24deg) translateX(-120%) translateY(0) ',
            opacity: "0",
            },
        },
        'slideout-3': {
          '0%': {
            transform: 'skewY(-24deg) translateX(0) translateY(-120px) ',
            opacity: "0",
            },
          '100%': {
            transform: 'skewY(-12deg) translateX(-120%) translateY(-90px) ',
            opacity: "90",
            },
        }, 



        'slide2-3': {
          '0%': {
            transform: 'translateX(0) skewY(0deg) translateY(0px)',
            },
          '100%': {
            transform: 'translateX(120%) skewY(-12deg) translateY(-30px)',
            },
        },
        'slide1-2': {
          '0%': {
            transform: 'skewY(12deg) translateX(0) translateY(-30px)',
            },
          '100%': {
            transform: ' skewY(0) translateX(120%) translateY(0)',
            },
        }, 

        'slideout-1': {
          '0%': {
            transform: 'skewY(24deg) translateX(0) translateY(-120px) ',
            opacity: "0",
            },
          '100%': {
            transform: 'skewY(12deg) translateX(120%) translateY(-90px) ',
            opacity: "90",
            },
        },        
        'slide3-out': {
          '0%': {
            transform: 'skewY(-12deg) translateX(0) translateY(-30px) ',
            opacity: "100",
            },
          '100%': {
            transform: 'skewY(-24deg) translateX(120%) translateY(0) ',
            opacity: "0",
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
