import React from 'react'
import { useRef } from 'react'
import { useScroll, motion} from 'framer-motion'

interface props{
    cards: {
        imageurl: string;
        text1: string;
        text2: string;
        text3: string;
    }[]
}
const FlipCard = ({cards}:props) => {
    
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
      target: container,
      offset: ['0 2', '0.9 1']
    })
  

  return (
    <motion.div style={{opacity:scrollYProgress, scale: scrollYProgress }} className='lg:w-5/6 py-10 m-auto flex flex-wrap place-content-evenly border-b-[1px] border-gray-300 max-w-[940px]' ref={container}>
    <h1  className='text-2xl lg:text-4xl text-white font-alkatra text-center md:text-left pb-2 w-full'>What I can possibly do for you?</h1>   
    {
    cards.map((cards, index)=>(
        <div  key={index} className="flex  items-center justify-center py-2">
            <div className="group h-72 w-60 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                    <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" 
                    src={cards.imageurl} 
                    alt="" />
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-xl font-bold">{cards.text1}</h1>
                    <p className="text-lg">{cards.text2}</p>
                    <p className="text-sm">{cards.text3}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>        
    ))}
  </motion.div>
  )
}

export default FlipCard
