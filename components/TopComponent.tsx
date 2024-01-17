import React from 'react'
import Image from 'next/image'

const TopComponent = () => {

  const ScrollToContent=()=>{
    window.scrollTo({
      top:800,
      behavior: "smooth"
    })
  }

  return (
    <div style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgQ_eLk1R5wKEl8-v2Nwvpx8uEm0_wz-9AeWyvaqt18q1KTr58H9IsyhNFm6dMpGytMk&usqp=CAU)`}} 
            className='h-[800px] bg-fixed relative border-b-4 border-gray-900'>
      <div className='absolute left-full top-1/4 text-[300px] w-[6000px] animate-text-slide overflow-hidden font-Frederica'>
            IT STUDENT, MIND FULL OF IDEAS
      </div>
      <div className='absolute left-full top-1/4 text-[300px] w-[6000px] animate-text-slide2 font-Frederica overflow-hidden'>
            IT STUDENT, MIND FULL OF IDEAS
      </div>
      <button onClick={()=>ScrollToContent()} className='absolute bottom-20 left-10 bg-white border-[1px] border-black rounded-2xl animate-bounce z-10'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div style={{backgroundImage: `url(https://github.com/dbanaszak1/portfolio/blob/main/images/profile.png?raw=true)`}}  
            className='m-auto translate-y-[198px] h-[600px] w-[600px] bg-cover z-20'></div>
    </div>
  )
}

export default TopComponent
