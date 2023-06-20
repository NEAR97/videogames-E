import React, { useEffect, useState } from 'react';
import { videogames } from '../../assets/data/videogames';
import { RiShoppingCart2Line, RiHeart3Line, RiShoppingCartLine, RiHeartAddFill, RiHeartFill } from "react-icons/ri";



const WishList = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(videogames);
    }, []);

    return (
        <div className=" p-4 rounded-lg shadow-md bg-[#3a3837]/100 mt-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#E58D27] ">Lista de Deseos</h2>
            {cartItems.length > 0 ? (
                <ul className="space-y-4 ">
                    {cartItems.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <li className="flex items-center mb-4   ">
                                <div className="flex items-center justify-center h-10 w-10 bg-gray-300 rounded-md mr-4">
                                    <img
                                        className="h-6 w-6 rounded-md"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-medium text-[#E58D27]">{item.name}</h3>
                                    <p className="text-white">{item.type}</p>
                                </div>
                                <RiHeartFill className='text-[#E58D27]' />
                            </li>
                            {index !== cartItems.length - 1 && <hr className="border-gray-300 my-2" />}
                        </React.Fragment>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No items in the wish list.</p>
            )}
        </div>

    );
};

export default WishList;
