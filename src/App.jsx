import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-[#181A20] p-8'>
       <Header/>
       <main  className='h-[90vh] flex p-4'>
          
          <Sidebar/>
          
          <div className='flex-1 bg-blue-200 h-full overflow-y-scroll'>
            content
          </div> 

       </main>
      </div>
     
    </>
  )
}

export default App
