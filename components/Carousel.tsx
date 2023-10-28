'use client'
import React, {useEffect} from 'react'
import { useState } from 'react'

const Carousel = () => {

  const skills = [
    {
      bg: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
      info: "Bootstrap",
    },
    {
      bg: "https://plugins.jetbrains.com/files/15321/424772/icon/pluginIcon.png",
      info: "Tailwind",
    },

    {
      bg: "https://diegomariano.com/wp-content/uploads/2021/06/react-logo.png",
      info: "ReactJS",
    },
    {
      bg: "https://vitejs.dev/logo-with-shadow.png",
      info: "ViteJS",
    },    
    {
      bg: "https://static-00.iconduck.com/assets.00/brand-nextjs-icon-256x256-zm2coebd.png",
      info: "NextJS",
    },
  ]



  const [mainIndex, setMainIndex] = useState(20)






  useEffect(() => {
    const chevronR = document.getElementById("chevronRight");
    const chevronL = document.getElementById("chevronLeft");
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    const rightout = document.getElementById("rightout");
    const leftout = document.getElementById("leftout");


    if (chevronL && chevronR && div1 && div2 && div3 && rightout && leftout) {
      chevronL.addEventListener('click', () => {
        rightout.classList.remove("animate-carouselOut-3");
        leftout.classList.remove("animate-carouselOut-1");
        div3.classList.remove("animate-carousel3-2");
        div2.classList.remove("animate-carousel2-1");
        div1.classList.remove("animate-carousel1-out");
        div3.classList.remove("animate-carousel3-out");
        div2.classList.remove("animate-carousel2-3");
        div1.classList.remove("animate-carousel1-2");

        setTimeout(() => {
          rightout.classList.add("animate-carouselOut-3");
          div3.classList.add("animate-carousel3-2");
          div2.classList.add("animate-carousel2-1");
          div1.classList.add("animate-carousel1-out");
          
        }, 0);
      });
      chevronR.addEventListener('click', () => {
        rightout.classList.remove("animate-carouselOut-3");
        leftout.classList.remove("animate-carouselOut-1");
        div3.classList.remove("animate-carousel3-out");
        div2.classList.remove("animate-carousel2-3");
        div1.classList.remove("animate-carousel1-2");
        div3.classList.remove("animate-carousel3-2");
        div2.classList.remove("animate-carousel2-1");
        div1.classList.remove("animate-carousel1-out");
        setTimeout(() => {
          leftout.classList.add("animate-carouselOut-1");
          div3.classList.add("animate-carousel3-out");
          div2.classList.add("animate-carousel2-3");
          div1.classList.add("animate-carousel1-2");
        }, 0);
      });
    }
  }, []);

  return (
    <div className='w-[1600px] m-auto items-center pt-6'>
      <div className='w-full text-center text-4xl font-alkatra text-white'>{skills[(mainIndex+2)%5].info}</div>
      <div  className='flex justify-center items-center relative '>
        <div id="chevronLeft" className='text-white skew-y-[24deg] absolute top-[60px] left-[300px] cursor-pointer'>
          <svg onClick = {() => {setTimeout(() => {setMainIndex(mainIndex+1)}, 2000)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>          
        </div>


        <div style={{backgroundImage: `url(${skills[(mainIndex)%5].bg})`}} id="leftout" className='w-64 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gray-700 m-6 rounded-md skew-y-[24deg] translate-y-[-120px] opacity-0 bg-cover'>
        
        </div>
        <div style={{backgroundImage: `url(${skills[(mainIndex+1)%5].bg})`}} id="div1" className='w-64 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gray-700 m-6 rounded-md skew-y-[12deg] translate-y-[-30px] bg-cover'>
        
        </div>
        <div style={{backgroundImage: `url(${skills[(mainIndex+2)%5].bg})`}} id="div2" className='w-64 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gray-700 m-6 rounded-md bg-cover'>
        
        </div>
        <div style={{backgroundImage: `url(${skills[(mainIndex+3)%5].bg})`}} id="div3" className='w-64 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gray-700 m-6 rounded-md -skew-y-[12deg] translate-y-[-30px] bg-cover'>
        
        </div>
        <div style={{backgroundImage: `url(${skills[(mainIndex+4)%5].bg})`}} id="rightout" className='w-64 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gray-700 m-6 rounded-md -skew-y-[24deg] translate-y-[-120px] opacity-0 bg-cover'>
        
        </div>


        <div id="chevronRight" className='text-white -skew-y-[24deg] absolute top-[60px] right-[300px] cursor-pointer'>
          <svg onClick = {() => {setTimeout(() => {setMainIndex(mainIndex-1)}, 2000)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>          
        </div>
      </div>
    </div>
  )
}

export default Carousel
