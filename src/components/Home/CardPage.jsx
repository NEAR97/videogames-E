
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

        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={game.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-m title-font text-[#E58D27] tracking-widest">
                            {game.console}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            The Catcher in the Rye
                        </h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-[#E58D27]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-[#E58D27]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-[#E58D27]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-[#E58D27]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-4 h-4 text-[#E58D27]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="text-[#E58D27] ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-[#E58D27]">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a className="text-[#E58D27]">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a className="text-[#E58D27]">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed text-[#E58D27]">
                            {game.description}
                        </p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                            <div className="flex ml-6 items-center">
                                <span className="mr-3 text-[#f8a240]">Cantidad</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-[#E58D27] mr-4">
                                ${game.price}
                            </span>
                            <button className="bg-[#E58D27] text-black font-bold rounded-full w-1/3 p-3 hover:-translate-y-1 transition-all duration-200 mr-2 flex items-center justify-center">
                                <RiShoppingCartLine />
                            </button>
                            <button className="bg-[#E58D27] text-black font-bold rounded-full w-1/2 p-3 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center">
                                <RiHeartAddFill />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <div className="flex flex-col rounded-lg bg-[#362C29]/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto max-w-4xl p-8 mb-10 mt-8">
        //     <div className="flex flex-col md:flex-row">
        //         <img
        //             className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-72 md:rounded-none md:rounded-l-lg mb-6 md:mb-0 mr-10"
        //             src={game.image}
        //             alt=""
        //         />
        //         <div className="flex flex-col justify-start md:ml-8">
        //             <h3 className="mb-8 text-4xl font-medium text-neutral-800 dark:text-neutral-50">
        //                 {game.name}
        //             </h3>
        //             <h6 className="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
        //                 {game.description}
        //             </h6>
        //             <h2 className="text-2xl text-[#E58D27] mb-8">
        //                 Precio: ${game.price}
        //             </h2>
        //             <div className="flex justify-between">
        //                 <button className="bg-[#E58D27] text-black font-bold rounded-full w-1/2 p-3 hover:-translate-y-1 transition-all duration-200 mr-2 flex items-center justify-center">
        //                     <RiShoppingCartLine />
        //                 </button>
        //                 <button className="bg-[#E58D27] text-black font-bold rounded-full w-1/2 p-3 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center">
        //                     <RiHeartAddFill />
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>




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
