import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiShoppingCart2Line, RiHeart3Line } from "react-icons/ri";

const Header = () => {
  return (
   <header className='h-[7vh] lg:h-[10vh] text-gray-400 py-4 px-10 flex items-center justify-between z-40'>
        <ul className='flex items-center gap-6'>
        <NavLink to="/" className="hover:text-[#E58D27] transition-colors">
            Home
        </NavLink>
        <NavLink to="/"  className="hover:text-[#E58D27] transition-colors">
            Store
        </NavLink>
        <NavLink to="/" className="hover:text-[#E58D27] transition-colors">
            Streams
        </NavLink>
        <NavLink to="/" className="hover:text-[#E58D27] transition-colors" > 
            News
        </NavLink>
        </ul>

        <ul className='flex items-center gap-6 text-xxl'> 
            <NavLink>
                <button className="hover:text-[#E58D27] transition-colors">< RiHeart3Line/></button>
            </NavLink>
            <NavLink>
                <button className="hover:text-[#E58D27] transition-colors">< RiShoppingCart2Line/></button>
            </NavLink>
            <NavLink>
                <button className="hover:text-[#E58D27] transition-colors"><img src='https://img.freepik.com/foto-gratis/alegre-chica-negocios-rizada-gafas_176420-206.jpg' className='w-8 h-8 object-cover rounded-full'></img></button>
            </NavLink>
            
       
        </ul>
        
   </header>
  )
}

export default Header
