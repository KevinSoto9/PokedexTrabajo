const ContenedorPokemon = document.querySelector('.Contenedor-Pokemon')

const colors = {
  fire: '#FFA05D',
  grass: '#8FD594',
  electric: '#FFE43B',
  water: '#7E97C0',
  ground: '#CAAC4D',
  rock: '#90642D',
  poison: '#9D5B9B',
  bug: '#EAFD71',
  dragon: '#97b3e6',
  psychic: '#FF96B5',
  flying: '#CDCDCD',
  fighting: '#FF5D5D',
  normal: '#FFFFFF'
}

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {CrearPokemon(data);});
  }

function fetchPokemons(num) {
    for (let i = 0; i < num; i++) {
      fetchPokemon(i);
    }
  }

  fetchPokemons(152);

function CrearPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("tarjeta");
  
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
  
    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
  
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    const type = document.createElement("div");
    const type2 = document.createElement("div");
    type.classList.add("type");
    type2.classList.add("type2");
    type.textContent = pokemon.types[0].type.name;
    type2.textContent = pokemon.types[1] ? pokemon.types[1].type.name : pokemon.default;
    type.style.backgroundColor = getTypeColor(pokemon.types[0].type.name)
    type2.style.backgroundColor = getTypeColor(pokemon.types[1] ? pokemon.types[1].type.name : pokemon.default)

  
    card.appendChild(sprite);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(type2);

    ContenedorPokemon.appendChild(card);

    function getTypeColor(typeName) {
      switch (typeName) {
      case 'normal':
      return '#A8A878';
      case 'fire':
      return '#F08030';
      case 'water':
      return '#6890F0';
      case 'grass':
      return '#78C850';
      case 'electric':
      return '#F8D030';
      case 'ice':
      return '#98D8D8';
      case 'fighting':
      return '#C03028';
      case 'poison':
      return '#A040A0';
      case 'ground':
      return '#E0C068';
      case 'flying':
      return '#A890F0';
      case 'psychic':
      return '#F85888';
      case 'bug':
      return '#A8B820';
      case 'rock':
      return '#B8A038';
      case 'ghost':
      return '#705898';
      case 'dragon':
      return '#7038F8';
      case 'dark':
      return '#705848';
      case 'steel':
      return '#B8B8D0';
      case 'fairy':
      return '#EE99AC';
      }}
}

function Quitatodo(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}

function modoOscuro(){
  let main_body = document.body;
  main_body.classList.toggle("modo-oscuro");
}

const listaPokemons = [CrearPokemon()];
