import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-[#181A20]'>
       <Header/>
       <main  className='h-[90vh] flex'>
          <div>
            Sidebar
          </div>
          <div>
            content
          </div> 

       </main>
      </div>
     
    </>
  )
}

export default App
