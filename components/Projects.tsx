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
        <div key={index}>
            <div className='w-1/2 m-auto text-white font-alkatra flex shadow-2xl rounded-2xl p-6 items-center relative'>
                <div className='h-32 w-32 bg-cover' style={{backgroundImage: `url(${project.logo})`}}></div>
                <div className='text-3xl px-10 flex justify-center items-center h-full'>{project.name}</div>
                <div className='text-lg px-10'>
                    <ul>
                        <li>Responsive web design</li>
                        <li>Clean and nicely designed</li>
                        <li>Modern and innovative</li>
                        <li>Step by step made by me</li>
                    </ul>                    
                </div>
                <a href={project.url} target='blank'><button className='bg-gray-700 hover:bg-gray-900 border-2 border-white animate-bounce  text-2xl p-3 rounded-2xl'>Check it here</button></a>
            </div>
            <div></div>
        </div>
    ))
  )
}

export default Projects
