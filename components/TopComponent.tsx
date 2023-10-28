import React from 'react'
import Image from 'next/image'

const TopComponent = () => {
  return (
    <div style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgQ_eLk1R5wKEl8-v2Nwvpx8uEm0_wz-9AeWyvaqt18q1KTr58H9IsyhNFm6dMpGytMk&usqp=CAU)`}} 
            className='h-[800px] bg-fixed relative border-b-2 border-black'>
      <div className='absolute left-full top-1/4 text-[200px] w-[5000px] animate-text-slide overflow-hidden font-alkatra'>
            IT STUDENT, FUTURE WEB DEV WITH MANY IDEAS
      </div>
      <div style={{backgroundImage: `url(https://github.com/dbanaszak1/portfolio/blob/main/images/profile.png?raw=true)`}}  
            className='m-auto translate-y-[198px] h-[600px] w-[600px] bg-cover z-20'></div>
    </div>
  )
}

export default TopComponent
