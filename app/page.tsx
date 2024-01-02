'use client';
import AboutMe from '@/components/AboutMe'
import Exp from '@/components/Exp'
import NavBar from '@/components/NavBar'
import TopComponent from '@/components/TopComponent'
import { useRef } from 'react'
import { useTransform, useScroll, motion, useSpring} from 'framer-motion'
import Contact from '@/components/Contact';



export default function Home() {

  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['0 1', '1.33 1']
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const y = useTransform(scrollYProgress, [0,1], [0,1000])

  return (
    <main ref={container} className="overflow-hidden bg-gray-800" style={{backgroundImage:`url(https://github.com/dbanaszak1/portfolio/blob/main/images/bg.jpg?raw=true)`}}>
      <NavBar/>
      <TopComponent/>
      <section>
        <AboutMe/>
        <Exp/>
        <Contact/>
      </section>
    </main>
  )
}
