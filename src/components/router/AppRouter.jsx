import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Home/HomePage'
import CardPage from '../Home/CardPage'
import Cart from '../../Cart/Cart'
import News from '../News/News'

const AppRouter = () => {
  return (
    <>
        <div className="">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="store"  />
                
                <Route path="streams"  />
                <Route path="game/:id"   element={<CardPage />} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/news' element={<News/>}></Route>
                                

                <Route path="/"  />

            </Routes>
        </div>


    </>
  )
}

export default AppRouter
