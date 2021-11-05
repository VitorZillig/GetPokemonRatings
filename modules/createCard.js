export function CreateCard({ pokemonName, hp, attack, defense, speed, image,type }) {
    return `<div class = "card ${type}" id = ${pokemonName}>
      <div class = "pokePhoto">
        <img alt = ${pokemonName} src = ${image} />
      </div>
      <div class = "pokeInfos">
        <div class = "info">
          <span>LIFE</span>
          <span>${hp}</span>
        </div>
        <div class = "info">
          <span>ATTACK</span>
          <span>${attack}</span>
        </div>
        <div class = "info">
          <span>DEFENSE</span>
          <span>${defense}</span>
        </div>
        <div class = "info">
        <span>SPEED</span>
        <span>${speed}</span>
        </div>
      </div>
    </div>`;
  }