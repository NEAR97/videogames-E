import React from 'react'
import Card from './Card'
import { videogames } from '../../assets/data/videogames'

const InfoCards = () => {
  return (
    <div className="flex-1 h-full">
    {/* Portada */}
    <div className="rounded-2xl mb-4">
      <img
        src="https://culturademancos.com/wp-content/uploads/2022/03/Portada-de-Horizon-Zero-Dawn-1-1024x576.jpg"
        className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
      />
    </div>
    <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
      {videogames.map((game) => (
        <Card 
          key={game.id}
          {...game}
          ></Card>
      ))}
    </div>
  </div>
  )
}

export default InfoCards
