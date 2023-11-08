import AboutMe from '@/components/AboutMe'
import Exp from '@/components/Exp'
import NavBar from '@/components/NavBar'
import TopComponent from '@/components/TopComponent'
import Image from 'next/image'

export default function Home() {


  return (
    <main className="overflow-hidden bg-gray-800" style={{backgroundImage:`url()`}}>
      <NavBar/>
      <TopComponent/>
      <Exp/>
    </main>
  )
}
