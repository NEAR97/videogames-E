import React from 'react'
import Sidebar from './Sidebar'
import InfoCards from './InfoCards'

const HomePage = () => {
    return (
        <main className='flex-grow flex mr-1'>

            <div className='mr-2'>
                <Sidebar className='' />
            </div>



            <div className='flex-grow mb-6 ml-3'>
                <InfoCards />

            </div>


        </main>
    )
}

export default HomePage
