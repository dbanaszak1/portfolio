import NavBar from '@/components/NavBar'
import TopComponent from '@/components/TopComponent'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar/>
      <TopComponent/>
    </main>
  )
}
