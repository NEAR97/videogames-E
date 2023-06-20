import React from 'react'

const News = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#E58D27]">
                                Las Noticias Más Relevantes de la Semana
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded" />
                        </div>

                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-[#362C29]/70 p-6 rounded-lg">
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://www.somosxbox.com/wp-content/uploads/2023/03/diablo-iv-1-1-1170x658.jpg"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                    20/06/2023
                                </h3>
                                <h2 className="text-lg text-[#E58D27] font-medium title-font mb-4">
                                    Todo lo que sabemos hasta ahora sobre la primera temporada de Diablo IV
                                </h2>
                                <p className="leading-relaxed text-base text-white">
                                    Con la llegada de la primera temporada de Diablo IV dispuesta para mediados o finales de julio, ya deberíamos saber que nos espera

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-[#362C29]/70 p-6 rounded-lg">
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://www.somosxbox.com/wp-content/uploads/2023/06/trailer-de-Kraven-1170x658.jpg"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                20/06/2023
                                </h3>
                                <h2 className="text-lg text-[#E58D27] font-medium title-font mb-4">
                                Ya disponible el primer tráiler de Kraven el Cazador, la nueva película del villano de Spiderman
                                </h2>
                                <p className="leading-relaxed text-base text-white">
                                La cinta de Sony Interactive ha presentado su primer tráiler, y la recepción de la gente no ha sido del todo positiva
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-[#362C29]/50 p-6 rounded-lg">
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://www.somosxbox.com/wp-content/uploads/2022/09/62ea4f8e09372571f2736a71-3-1170x658.jpg"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                20/06/2023
                                </h3>
                                <h2 className="text-lg text-[#E58D27] font-medium title-font mb-4">
                                Nuevos detalles sobre el parkour y el combate de Assassin’s Creed Mirage
                                </h2>
                                <p className="leading-relaxed text-base text-white">
                                Gracias a una entrevista con el director de animación Benjamin Fox, hemos podido saber más sobre los movimientos, el parkour .
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-[#362C29]/50 p-6 rounded-lg">
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src="https://www.somosxbox.com/wp-content/uploads/2023/06/Xbox-Series-S-es-la-opcion-para-aquellos-jugadores-con-un-presupuesto-mas-limitado-cuya-calidad-precio-es-inigualable-en-el-mercado-actual-portada-1170x658.jpg"
                                    alt="content"
                                />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                20/06/2023
                                </h3>
                                <h2 className="text-lg text-[#E58D27] font-medium title-font mb-4">
                                    Xbox Series S es la opción para jugadores con un presupuesto más limitado
                                </h2>
                                <p className="leading-relaxed text-base text-white">
                                Xbox Series S es la opción para aquellos jugadores con un presupuesto más limitado, cuyo rendimiento/precio es inigualable en el mercado actual
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default News
