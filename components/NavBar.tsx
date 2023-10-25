import React from 'react'

const NavBar = () => {
  return (
    <nav className='absolute w-5/6 right-0 top-10 h-20 rounded-l-full bg-white z-50 inline-flex items-center border-[1px] border-black'>
      <div className='inline-flex w-1/4 px-10 items-center'>
        <div className='h-16 w-16 bg-cover' style={{backgroundImage: `url(https://github.com/dbanaszak1/portfolio/blob/main/images/logo-no-background.png?raw=true)`}}></div>
        <div>descr</div>        
      </div>
      <div className='text-2xl w-1/2 text-end px-10'>Links</div>
    </nav>
  )
}

export default NavBar
