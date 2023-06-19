import { videogames } from "../assets/data/videogames"

export const getGameById = (id) =>{
    return videogames.find((game) => game.id === id)
}