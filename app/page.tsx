'use client';
import AboutMe from '@/components/AboutMe'
import Exp from '@/components/Exp'
import NavBar from '@/components/NavBar'
import TopComponent from '@/components/TopComponent'
import { useEffect } from 'react'

export default function Home() {

  return (
    <main className="overflow-hidden bg-gray-800" style={{backgroundImage:`url(https://github.com/dbanaszak1/portfolio/blob/main/images/bg.jpg?raw=true)`}}>
      <div>
        <NavBar/>
        <TopComponent/>
        <AboutMe/>
        <Exp/>        
      </div>
    </main>
  )
}
