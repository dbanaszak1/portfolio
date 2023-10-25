import React from 'react'
import Image from 'next/image'

const TopComponent = () => {
  return (
    <div style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgQ_eLk1R5wKEl8-v2Nwvpx8uEm0_wz-9AeWyvaqt18q1KTr58H9IsyhNFm6dMpGytMk&usqp=CAU)`}} 
            className='h-screen bg-fixed relative'>
      <div className='absolute left-full text-[200px] w-[5000px] animate-text-slide overflow-hidden font-body'>
            IT STUDENT, FUTURE WEB DEV WITH MANY IDEAS
      </div>
      <div style={{backgroundImage: `url(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}}  
            className='absoulte bottom-1/2 left-0 h-[400px] w-[400px] z-10'></div>
    </div>
  )
}

export default TopComponent
