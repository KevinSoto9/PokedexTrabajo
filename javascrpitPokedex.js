const ContenedorPokemon = document.querySelector('.Contenedor-Pokemon')

async function fetchPokemons() {
  for (let i = 0; i < 152; i++) {
    await fetchPokemon(i);
  }
}

async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    CrearPokemon(pokemon); 
  } catch (error) {
    console.error(`Error al obtener los datos del pokemon con ID ${id}:`, error);
  }
}

function CrearPokemon(pokemon) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("tarjeta");

  const contenedorImagen = document.createElement("div");
  contenedorImagen.classList.add("img-container");

  const imagen = document.createElement("img");
  imagen.src = pokemon.sprites.front_default;

  contenedorImagen.appendChild(imagen);

  const numeros = document.createElement("spam");
  numeros.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const nombre = document.createElement("p");
  nombre.classList.add("nombre");
  nombre.textContent = pokemon.name;

  const tipo = document.createElement("div");
  const tipo2 = document.createElement("div");
  tipo.classList.add("tipo");
  tipo2.classList.add("tipo2");
  tipo.textContent = pokemon.types[0].type.name;
  tipo2.textContent = pokemon.types[1] ? pokemon.types[1].type.name : pokemon.default;
  tipo.style.backgroundColor = getTypeColor(pokemon.types[0].type.name);
  tipo2.style.backgroundColor = getTypeColor(pokemon.types[1] ? pokemon.types[1].type.name : pokemon.default);

  contenedor.appendChild(contenedorImagen);
  contenedor.appendChild(numeros);
  contenedor.appendChild(nombre);
  contenedor.appendChild(tipo);
  contenedor.appendChild(tipo2);

  ContenedorPokemon.appendChild(contenedor);
}


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
  
function Quitatodo(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}

function modoOscuro(){
  let main_body = document.body;
  main_body.classList.toggle("modo-oscuro");
}

fetchPokemons(1);