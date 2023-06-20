import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiShoppingCart2Line, RiHeart3Line, RiMenu2Line, RiCloseLine } from "react-icons/ri";
import Cart from '../../Cart/Cart'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <header className='h-[7vh] lg:h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between z-40'>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden text-2xl"
            >
                <RiMenu2Line />
            </button>
            <div className={`fixed left-0 bg-[#181A20] w-full h-full z-50 transition-all ${showMenu ? "top-0" : "-top-full"
                }`}>
                <button onClick={() => setShowMenu(!showMenu)} className="text-3xl p-4">
                    <RiCloseLine />
                </button>
                <ul className='mt-20'>
                    <NavLink to="/" className="text-4xl block text-center p-4 ">
                        Home
                    </NavLink>
                    <NavLink to="/store" className="text-4xl block text-center p-4">
                        Store
                    </NavLink>
                    <NavLink to="/streams" className="text-4xl block text-center p-4">
                        Streams
                    </NavLink>
                    <NavLink to="/news" className="text-4xl block text-center p-4" >
                        News
                    </NavLink>
                </ul>

            </div>
            <ul className="hidden lg:flex items-center gap-6 mb-4">
                <li>
                    <NavLink to="/" className="text-4xl block text-center p-4 hover:text-[#E58D27] transition-colors">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/store" className="text-4xl block text-center p-4 hover:text-[#E58D27] transition-colors">
                        Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/streams" className="text-4xl block text-center p-4 hover:text-[#E58D27] transition-colors">
                        Streams
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news" className="text-4xl block text-center p-4 hover:text-[#E58D27] transition-colors" >
                        News
                    </NavLink>
                </li>
            </ul>
            {/* Menu */}
            <ul className="flex items-center gap-6 text-xl mb-3">
                <li>
                    <NavLink to="/wishlist">
                        <button className="hover:text-[#E58D27] transition-colors">< RiHeart3Line /></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                        <button className="hover:text-[#E58D27] transition-colors" >< RiShoppingCart2Line /></button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <button className="hover:text-[#E58D27] transition-colors"><img src='https://img.freepik.com/foto-gratis/alegre-chica-negocios-rizada-gafas_176420-206.jpg' className='w-8 h-8 object-cover rounded-full'></img></button>
                    </NavLink>
                </li>
            </ul>


        </header>
    )
}

export default Header
