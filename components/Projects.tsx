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
                <div className='m-auto xl:mx-12 justify-center'><div className='w-32 h-32  bg-cover ' style={{backgroundImage: `url(${project.logo})`}}></div></div>
                <div className='text-3xl py-4 xl:px-12 flex m-auto items-center h-full'>{project.name}</div>
                <div className='text-lg px-10'>
                    <ul>
                        <li>*Responsive web design</li>
                        <li>*Clean and nicely designed</li>
                        <li>*Modern and innovative</li>
                        <li>*Step by step made by me</li>
                    </ul>                    
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
