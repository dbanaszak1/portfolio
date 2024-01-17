import React, { useState } from 'react'
    interface props{
        slides:{
            bg:string;
            info:string;
        }[]
    }

const SmallSlider = ({slides}:props) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const prev = () => {
      if (currentIndex === 0)
        setCurrentIndex(4);
      else {
        setCurrentIndex(currentIndex - 1);
      }
    };
    const next = () => {
      if (currentIndex === 4)
        setCurrentIndex(0);
      else {
        setCurrentIndex(currentIndex + 1);
      }
    };  
    
    
    return (
    <>

    <div className="w-[300px] h-[360px] relative p-10 px-4 m-auto">    
    <div className='absolute
     w-[300px] top-5 -translate-x-5 text-center m-auto font-alkatra text-2xl text-white'>{slides[currentIndex].info}</div>
      <div style={{ backgroundImage: `url(${slides[currentIndex].bg})` }}
        className="h-full w-full bg-center bg-cover duration-500 rounded-2xl"
      >
        <div className="text-white text-4xl absolute top-[50%] right-[90%] translate-x-[10px] bg-black/20 rounded-full cursor-pointer"
          onClick={() => prev()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="text-white text-4xl absolute top-[50%] left-[90%] -translate-x-[10px] bg-black/20 rounded-full cursor-pointer" onClick={() => next()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className={currentIndex === 0 ? "w-[20px]  h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[31%]" : "w-[20px]  h-[3px] rounded-lg bg-white absolute bottom-14 left-[31%]"}></div>
        <div className={currentIndex === 1 ? "w-[20px]  h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[39%]" : "w-[20px]  h-[3px] rounded-lg bg-white absolute bottom-14 left-[39%]"}></div>
        <div className={currentIndex === 2 ? "w-[20px]  h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[47%]" : "w-[20px]  h-[3px] rounded-lg bg-white absolute bottom-14 left-[47%]"}></div>
        <div className={currentIndex === 3 ? "w-[20px]  h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[55%]" : "w-[20px]  h-[3px] rounded-xl bg-white absolute bottom-14 left-[55%]"}></div>
        <div className={currentIndex === 4 ? "w-[20px]  h-[3px] rounded-lg bg-gray-600 absolute bottom-14 left-[63%]" : "w-[20px]  h-[3px] rounded-xl bg-white absolute bottom-14 left-[63%]"}></div>
      </div>
    </div>
  </>

  )
}

export default SmallSlider
