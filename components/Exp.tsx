import React from 'react'
import FlipCard from './FlipCard'
import Carousel from './Carousel'
import Projects from './Projects'


const Exp = () => {

    const expCards = [
        {
            imageurl:"https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png",
            text1:"Create responsive web design",
            text2:"In React, Next13, Vue",
            text3:"Or maybe other framework that i will learn",
        },
        {
            imageurl:"https://pbs.twimg.com/media/FuixahyX0AI8gGQ.png",
            text1:"Take responsibility for the tasks assigned to me",
            text2:"Cooperate with the team",
            text3:"And always do my best",
        },        
        {
            imageurl:"https://www.hubsol.com/public/upload/post/91261_web-development-lahore.jpg",
            text1:"Use innovative technologies",
            text2:"Such as Next13, Tailiwnd, Bootstrap",
            text3:"And gain experiece day by day",
        },
    ]

    const projects = [
        {
            name:"SkyTravel",
            url:"https://dbanaszak1.github.io/vite-deploy/home",
            logo:"https://github.com/dbanaszak1/vite-deploy/blob/main/public/images/logo-no-background.png?raw=true",
            screenshots:["",""]
        },
    ]

  return (
    <div className='my-20 '>
        <div className='lg:w-5/6 2xl:w-2/3 m-auto flex flex-wrap place-content-evenly pb-20'>
            <h1 className='text-5xl text-white font-alkatra text-center py-8 w-full'>What I can possibly do for you?</h1>            
            <FlipCard cards={expCards}/> 
        </div>
        <div className='pb-20'>
            <div className='border-gray-400 border-t-[1px] w-5/6 m-auto'></div>
            <h1 className='text-5xl text-white font-alkatra text-center pt-28 pb-16'>Technologies that I have some experience in:</h1>            
            <Carousel/>           
        </div>
        <div className='border-t-[1px] border-gray-400 w-5/6 m-auto'>
            <h1 className='text-5xl text-white font-alkatra text-center pt-20 pb-16'>Projects:</h1>
            <Projects project={projects}/>            
        </div>

    </div>
  )
}

export default Exp
