import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Home/HomePage'
import CardPage from '../Home/CardPage'
import Cart from '../../Cart/Cart'
import News from '../News/News'
import WishList from '../WishList/WishList'
import Streams from '../Streams/Streams'

const AppRouter = () => {
  return (
    <>
        <div className="">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store" element={<HomePage/>} />
                
                
                <Route path="game/:id"   element={<CardPage />} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/news' element={<News/>}></Route>
                <Route path='/wishlist' element={<WishList/>}></Route>
                <Route path='/streams' element={<Streams/>}></Route>
                                

                <Route path="/"  />

            </Routes>
        </div>


    </>
  )
}

export default AppRouter
