import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <div>
        <h1>Welcome to Task-G!</h1>
      </div>
    </main>
  )
}
