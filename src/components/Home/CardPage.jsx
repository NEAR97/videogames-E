
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getGameById } from '../../helpers/getGameById';
import { videogames } from '../../assets/data/videogames';
import { RiShoppingCart2Line, RiHeart3Line, RiShoppingCartLine, RiHeartAddFill } from "react-icons/ri";

const CardPage = () => {

    const { id } = useParams();

    const game = useMemo(() => getGameById(id), [id]);

    if (!game) {
        return <p className='text-slate-300'>Juego No encontrado</p>;
    }
    return (

        <div className="flex flex-col rounded-lg bg-[#362C29]/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto max-w-4xl p-8 mb-10 mt-8">
            <div className="flex flex-col md:flex-row">
                <img
                    className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-72 md:rounded-none md:rounded-l-lg mb-6 md:mb-0 mr-10"
                    src={game.image}
                    alt=""
                />
                <div className="flex flex-col justify-start md:ml-8">
                    <h3 className="mb-8 text-4xl font-medium text-neutral-800 dark:text-neutral-50">
                        {game.name}
                    </h3>
                    <h6 className="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
                        {game.description}
                    </h6>
                    <h2 className="text-2xl text-[#E58D27] mb-8">
                        Precio: ${game.price}
                    </h2>
                    <div className="flex justify-between">
                        <button className="bg-[#E58D27] text-black font-bold rounded-full w-1/2 p-3 hover:-translate-y-1 transition-all duration-200 mr-2 flex items-center justify-center">
                            <RiShoppingCartLine />
                        </button>
                        <button className="bg-[#E58D27] text-black font-bold rounded-full w-1/2 p-3 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center">
                            <RiHeartAddFill />
                        </button>
                    </div>
                </div>
            </div>
        </div>




        // <div className="bg-gray-100 p-8 rounded-lg">
        //     <h1 className="text-2xl font-bold mb-4">{game.name}</h1>
        //     <p className="text-gray-600 mb-2">{game.description}</p>
        //     <p className="text-gray-600 mb-2">Tipo: {game.type}</p>
        //     <p className="text-gray-600 mb-4">Consola: {game.console}</p>
        //     <p className="text-gray-600 mb-4">Precio: ${game.price}</p>
        //     <img src={game.image} alt={game.name} className="w-64 h-64 object-cover rounded-lg shadow" />
        //     {/* Agrega aquí más detalles del videojuego si lo deseas */}
        // </div>
    )
}

export default CardPage
