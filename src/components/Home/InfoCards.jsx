import React from 'react'
import Card from './Card'
import { videogames } from '../../../public/data/videogames'

const InfoCards = () => {
  return (
    <div className="flex-1 h-full">
    {/* Portada */}
    <div className="rounded-2xl mb-4">
      <img
        src="https://as01.epimg.net/meristation/imagenes/2021/08/31/noticias/1630415976_693445_1630416052_portada_normal.jpg"
        className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
      />
    </div>
    <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
      {videogames.map((game) => (
        <Card 
          key={game.id}
          image={game.image}
          name={game.name}
          category={game.type}
          price={game.price}
          ></Card>
      ))}
    </div>
  </div>
  )
}

export default InfoCards
