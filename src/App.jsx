import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppRouter from './components/router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' min-h-screen bg-[#181A20] p-8'>
        <Header />
        <main className=''>
          <AppRouter/>
        </main>



        <footer className='min-h-screen flex-shrink-0 mb-0'>
          <Footer></Footer>
        </footer>

      </div>





    </>
  )
}

export default App
