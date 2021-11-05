import {getPokemonInformation} from './getData.js'

const maxValue = (data, prop)=>data.reduce((acc,cur)=>{
    return cur[prop]>acc?acc = cur[prop]:acc
},0)

const winnerPokemon = (data,prop)=>data.filter(pok=>{
    return pok[prop]===maxValue(data,prop)
})
export const filterPokemon = async()=>{
    const data = await getPokemonInformation()
    document.querySelectorAll('#winners .card').forEach(item=>item.classList.add('noCategory'))
    const choosenOption = document.querySelectorAll('select')[0].value.toLowerCase()
    winnerPokemon(data,choosenOption).forEach(pok=>{
        if(document.querySelector(`#winners #${pok.pokemonName}`)){
            document.querySelector(`#winners #${pok.pokemonName}`).classList.remove("noCategory")
        }    
    })
 }