import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Home/HomePage'
import CardPage from '../Home/CardPage'

const AppRouter = () => {
  return (
    <>
        <div className="">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="store"  />
                
                <Route path="streams"  />
                <Route path="game/:id"   element={<CardPage />} />
                <Route path="news"  />
                                

                <Route path="/"  />

            </Routes>
        </div>


    </>
  )
}

export default AppRouter
