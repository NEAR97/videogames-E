import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Home/HomePage'

const AppRouter = () => {
  return (
    <>
        <div className="">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="store"  />
                
                <Route path="streams"  />
                <Route path="hero/:id"  />
                <Route path="news"  />
                                

                <Route path="/"  />

            </Routes>
        </div>


    </>
  )
}

export default AppRouter
