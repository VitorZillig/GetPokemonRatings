import { CreateCard } from "./createCard.js"
import { getPokemonInformation,pokemonstoSeach } from "./getData.js"

const newPokemon = document.querySelector('#new-pokemon')
const addPokemonButton = document.querySelector('.add-pokemon')

addPokemonButton.addEventListener('click',(e)=>{
    e.preventDefault()
    addPokemonToList(pokemonstoSeach,newPokemon.value)

})

export const addOptions = ()=>{
    const props = ['hp','attack','defense','speed']
    const select = document.querySelector('select')
    props.forEach(item=>{
        const option = document.createElement('option')
        const opt = `<option value=${item}>${item.toUpperCase()}</option>`
        option.innerHTML = opt
        select.append(option)
    })
}

export const appendPokemons = async () => {
    const pokemonWrapper = document.querySelectorAll(".pokemonCards");
    const data = await getPokemonInformation();
    pokemonWrapper.forEach(item=>{
        data.forEach((pokemon) => {
            const card = document.createElement('div')
            card.innerHTML = CreateCard(pokemon)
            item.append(card);
        });
    })
};

const addPokemonToList = async(pokemon)=>{
    const curList = JSON.parse(localStorage.getItem('pokeList'))
    console.log(curList)
    curList.push("pikachu")
    console.log(curList)
    localStorage.setItem('pokeList',JSON.stringify(curList))
    const pokemonWrapper = document.querySelectorAll(".pokemonCards");
    const data = await getPokemonInformation();
    pokemonWrapper.forEach(item=>{
        const card = document.createElement('div')
        card.innerHTML = CreateCard(data[data.length-1])
         item.append(card);
    })

}