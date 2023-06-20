import React from 'react'

const Streams = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/hAK5IhEUrqg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                            Buy YouTube Videos
                        </h2>
                        <p className="leading-relaxed text-base text-white">
                        La nueva Ryzen™ Z1 Extreme de AMD potencia esta increíble máquina gaming. Se ha fabricado con el moderno proceso de 4 nm, con un silicio que incorpora tanto la arquitectura Zen 4 como los últimos gráficos RDNA™ 3. La consola ROG Ally, con increíbles tecnologías de escalado como FidelityFX™ Super Resolution y Radeon™ Super Resolution, puede aumentar la velocidad de fotogramas sin perder la excelencia de su calidad de imagen. 
                        </p>
                        
                    </div>
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7_0SnbF_MhU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                            Steam Deck
                        </h2>
                        <p className="leading-relaxed text-base text-white">
                        La estación de conexión de Steam Deck™ sirve de soporte para tu Steam Deck cuando lo conectes a pantallas externas, redes por cable, periféricos USB y la red eléctrica. Tanto si conectas tu Steam Deck a la televisión de tu salón como si lo quieres instalar en tu escritorio de trabajo o cargarlo en la mesita de noche, la estación de conexión es perfecta para proporcionar más formas de usar Steam Deck y más lugares donde puedes usarlo.

                        </p>
                        
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Streams
