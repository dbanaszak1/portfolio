import React from 'react'
import Icon from './Icon';
import { useEffect, useRef } from 'react'
import { useScroll, motion} from 'framer-motion'

interface props{
    project: {
        name: string;
        url: string;
        logo:string;
        logoclass:string;
        text: string[];
        screenshots: string[];
        tech: React.JSX.Element[];
    }[]
}

const svg=<svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>

const Projects = ({project}:props) => {

    const container = useRef(null);
    const {scrollYProgress} = useScroll({
      target: container,
      offset: ['0 3', '1.1 1']
    })

  return (
    <motion.div ref={container} style={{scale: scrollYProgress, opacity: scrollYProgress}} className='border-b-[1px] border-gray-300 pb-8'>{
        project.map((project,index)=>(
            <div key={index} className='flex place-content-evenly mb-6'>
                <div className='bgcolor lg:w-[900px] flex-wrap m-auto text-white font-alkatra flex shadow-2xl rounded-2xl p-6 items-center relative'>
                    <div className='flex sm:block px-2 m-auto py-4 md:py-0'>
                        <Icon icon={project.tech[0]} size={6} color="White"/>
                        <Icon icon={project.tech[1]} size={6} color="White"/>
                        <Icon icon={project.tech[2]} size={6} color="White"/>
                        <Icon icon={project.tech[3]} size={6} color="White"/>
                    </div>
                    <div className='m-auto w-full sm:w-32 items-center justify-center'>
                        <img className={project.logoclass} src={project.logo}/>
                    </div>
                    <div className='text-3xl py-4 xl:pr-10- flex m-auto items-center h-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{project.name}</div>
                    <div className='relative flex ml-10 pt-4'>
                        <div className='absolute translate-x-40 lg:-translate-x-24 text-xs -rotate-90 h-4 w-40'>(Hover here)</div>
                        <div className='text-lg'>
                            <ul className='relative'>
                                <li className='group'>
                                    <div className='inline-flex'>
                                        <span>{project.text[0]}</span>{svg}
                                    </div>
                                    <img className='border-[1px] border-black rounded-md w-20 h-40 absolute top-0 translate-x-64 -translate-y-6 invisible group-hover:visible' src={project.screenshots[0]}/>
                                </li>
                                <li className='group'>
                                    <div className='inline-flex'>
                                        <span>{project.text[1]}</span>
                                        {svg}
                                    </div>
                                    <img className='border-[1px] border-black absolute top-0 translate-x-64 invisible lg:group-hover:visible' src={project.screenshots[1]}/>
                                </li>
                                <li className='group'>
                                    <div className='inline-flex'>
                                        <span>{project.text[2]}</span>
                                        {svg}
                                    </div>
                                    <img className='border-[1px] border-black rounded-md w-20 h-40 absolute top-0 translate-x-64 -translate-y-6  invisible group-hover:visible' src={project.screenshots[2]}/>
                                </li>
                                <li className='group'>
                                    <div className='inline-flex'>
                                        <span>{project.text[3]}</span>
                                        {svg}
                                    </div>
                                    <img className='border-[1px] border-black absolute top-0 translate-x-64 invisible lg:group-hover:visible' src={project.screenshots[3]}/>
                                </li>
                            </ul>                    
                        </div>    
                    </div>

                    <div className='m-auto py-4 xl:px-12'>
                        <a href={project.url} target='blank'>
                            <button className='border-2 border-white text-2xl p-3 rounded-2xl hover:bg-white hover:text-black duration-500'>
                                Check it here
                            </button>
                        </a>                    
                    </div>
                </div>
            </div>
        ))}        
    </motion.div>

  )
}

export default Projects
