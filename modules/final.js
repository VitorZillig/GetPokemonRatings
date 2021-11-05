import { addOptions,appendPokemons } from './addHTMLElements.js';
import { pokemonstoSeach } from './getData.js';
import { filterPokemon } from './getWinnerPokemon.js';
pokemonstoSeach

  

export const getFinalResult= async()=>{
    localStorage.setItem('pokeList',JSON.stringify(pokemonstoSeach))
    appendPokemons()
    addOptions()
    document.querySelector('.winnerButton').addEventListener('click',filterPokemon)
  }
