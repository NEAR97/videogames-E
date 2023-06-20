import React, { useEffect, useState } from 'react'
import { videogames } from '../assets/data/videogames'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(videogames);
    }, []);

    return (
        <div className=" min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-4 text-[#E58D27]">Carrito de Compras</h1>
                <div className="flex flex-col md:flex-row gap-4">

                    <div className="md:w-3/4">
                        <div className="bg-[#3a3837]/100 rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold text-white">Producto</th>
                                        <th className="text-left font-semibold text-white">Precio</th>
                                        <th className="text-left font-semibold text-white">Cantidad</th>
                                        <th className="text-left font-semibold text-white">Total</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className=''>
                                            <td className="py-4 ">
                                                <div className="flex items-center">
                                                    <img
                                                        className="h-16 w-16 mr-4"
                                                        src={item.image}
                                                        alt="Product image"
                                                    />
                                                    <span className="font-semibold text-[#ef9229]">{item.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 text-[#ef9229]">${item.price}</td>
                                            <td className="py-4 text-[#ef9229]">
                                                <div className="flex items-center">
                                                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                                    <span className="text-center w-8">1</span>
                                                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                                </div>
                                            </td>
                                            <td className="py-4 text-[#ef9229]">${item.price * 1}</td>
                                        </tr>
                                        
                                    ))}




                                </tbody>
                            </table>
                        </div>
                    </div>



                    <div className="md:w-1/4">
                        <div className="bg-[#3a3837]/100 rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4 text-[#ef9229]">Resumen</h2>
                            <div className="flex justify-between mb-2">
                                <span className='text-white'>Subtotal</span>
                                <span className='text-[#ef9229]'>$19.99</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className='text-white'>Impuestos</span>
                                <span className='text-[#ef9229]'>$1.99</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className='text-white'>Envio</span>
                                <span className='text-[#ef9229]'>$0.00</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold text-white">Total</span>
                                <span className="font-semibold text-[#ef9229]">$21.98</span>
                            </div>
                            <button className="bg-[#ef9229] text-gray-900 py-2 px-4 rounded-lg mt-4 w-full">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cart
