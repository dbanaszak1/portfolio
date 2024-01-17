import React from 'react'
import { useRef } from 'react'
import { useScroll, motion} from 'framer-motion'

const Contact = () => {

    const contactCardsData = [
        {
            name: "Likedin",
            link:"https://www.linkedin.com/in/dominik-banaszak-b780b9273",
            icon:<svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/></svg>
        },
        {
            name:"Email",
            link:"mailto:dominikbanaszak530@gmail.com",
            icon:<svg fill="currentColor" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"/></svg>
        },
        {
            name:"Github",
            link:"https://github.com/dbanaszak1",
            icon:<svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"/></svg>
        },
        {
            name:"JustJoinIt",
            link:"",
            icon:<svg  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z"/>
            </svg>
        },
        {
            name:"Resume",
            link:"https://rxresu.me/dominikbanaszak530/resume",
            icon:<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H9M16 12H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M16 8H15M12 8H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 16H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        },
    ]
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
      target: container,
      offset: ['0 2', '1.1 1']
    })

  return (
    <motion.div ref={container} style={{scale: scrollYProgress, opacity: scrollYProgress}} className='max-w-[940px] m-auto w-5/6 pt-8 pb-8'>
      <div className='text-white font-alkatra text-4xl w-full'>Contact</div>
      <div className='flex flex-wrap max-w-[900px] m-auto items-center justify-center'>
        {contactCardsData.map((contactCardsData, index)=>(
            <a href={contactCardsData.link}>
                <div key={index} className='text-gray-300 bgcolor w-36 h-36 m-2 rounded-xl flex justify-center flex-wrap shadow-2xl hover:scale-110 duration-200'>
                    <div className='w-24 h-24 pt-2'>{contactCardsData.icon}</div>
                    <div className='text-center w-full font-alkatra text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>{contactCardsData.name}</div>
                </div>                
            </a>
        ))}            
      </div>
    </motion.div>
  )
}

export default Contact
