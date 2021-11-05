export const pokemonstoSeach = ["zapdos", "moltres", "articuno"];


const getPokemonData = async (pokelist) => {
    const pokemonPromises = pokelist.map(async (item) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`);
      return await res.json();
    })
  
    return Promise.all(pokemonPromises);
  };
  
export const getPokemonInformation = async () => {

    const pokeList = JSON.parse(localStorage.getItem('pokeList'))
    const data = await getPokemonData(pokeList);
    const extractInfos = data.reduce((acc, cur) => {
      const addProperties = ({ stats }) => {
        let obj = {
          pokemonName: cur.forms[0].name,
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          speed: stats[5].base_stat,
          image: cur.sprites.other.dream_world.front_default,
          type:cur.types[0].type.name
        };
        return obj;
      };
      acc.push(addProperties(cur));
      return acc;
    }, []);
    return extractInfos;
  };
