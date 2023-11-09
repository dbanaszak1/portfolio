import React from 'react'

interface props{
    project: {
        name: string;
        url: string;
        logo:string;
        screenshots: string[];
    }[]
}

const Projects = ({project}:props) => {
  return (
    project.map((project,index)=>(
        <div key={index} className='flex  place-content-evenly'>
            <div className='bg-gray-800 flex-wrap m-auto border-[1px] border-white text-white font-alkatra flex shadow-2xl rounded-2xl p-6 items-center relative'>
                <div className='m-auto w-full md:w-32 mx-6 items-center xl:mx-12 justify-center'>
                    <img className='w-32 h-32 m-auto' src={project.logo}/>
                </div>
                <div className='text-3xl py-4 xl:px-12 flex m-auto items-center h-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{project.name}</div>
                <div className='relative flex'>
                    <div className='absolute translate-x-40 lg:-translate-x-24 text-xs -rotate-90 h-4 w-40'>(Hover here)</div>
                    <div className='text-lg'>
                        <ul className='relative'>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Responsively designed</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                            </li>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Clean and nicely designed</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                            </li>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Modern and innovative</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                            </li>
                            <li className='group'>
                                <div className='inline-flex'>
                                    <span>Step by step made by me</span>
                                    <svg className='px-2' xmlns="http://www.w3.org/2000/svg" fill="Green" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                                <img className='absolute top-0 translate-x-64 invisible group-hover:visible' src={project.screenshots[3]}/>
                            </li>
                        </ul>                    
                    </div>    
                </div>
                
                <div className='m-auto py-4 xl:px-12'>
                    <a href={project.url} target='blank'>
                        <button className=' bg-gray-900 border-2 border-white text-2xl p-3 rounded-2xl hover:bg-white hover:text-black duration-500'>
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
