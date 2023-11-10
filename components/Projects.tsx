import React from 'react'
import Icon from './Icon';

interface props{
    project: {
        name: string;
        url: string;
        logo:string;
        screenshots: string[];
        tech: React.JSX.Element[];
    }[]
}

const Projects = ({project}:props) => {
  return (
    project.map((project,index)=>(
        <div key={index} className='flex place-content-evenly shadow-xl'>
            <div className='bgcolor flex-wrap m-auto text-white font-alkatra flex shadow-2xl rounded-2xl p-6 items-center relative'>
                <div className='flex sm:block px-2 m-auto py-4 md:py-0'>
                    <Icon icon={project.tech[0]} size={6} color="White"/>
                    <Icon icon={project.tech[1]} size={6} color="White"/>
                    <Icon icon={project.tech[2]} size={6} color="White"/>
                    <Icon icon={project.tech[3]} size={6} color="White"/>
                </div>
                <div className='m-auto w-full sm:w-32 items-center justify-center'>
                    <img className='w-24 h-24 m-auto' src={project.logo}/>
                </div>
                <div className='text-3xl py-4 xl:pr-10- flex m-auto items-center h-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{project.name}</div>
                <div className='relative flex ml-10 pt-4'>
                    <div className='absolute translate-x-40 lg:-translate-x-24 text-xs -rotate-90 h-4 w-40'>(Hover here)</div>
                    <div className='text-lg'>
                        <ul className='relative'>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Responsively designed</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                                <img className='border-[1px] border-black rounded-md w-20 h-40 absolute top-0 translate-x-64 -translate-y-6 invisible group-hover:visible' src={project.screenshots[0]}/>
                            </li>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Clean and nicely designed</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                                <img className='border-[1px] border-black absolute top-0 translate-x-64 invisible group-hover:visible' src={project.screenshots[1]}/>
                            </li>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Modern and innovative</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                                <img className='border-[1px] border-black rounded-md w-20 h-40 absolute top-0 translate-x-64 -translate-y-6  invisible group-hover:visible' src={project.screenshots[2]}/>
                            </li>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Step by step made by me</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                                <img className='border-[1px] border-black absolute top-0 translate-x-64 invisible group-hover:visible' src={project.screenshots[3]}/>
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
            <div></div>
        </div>
    ))
  )
}

export default Projects
