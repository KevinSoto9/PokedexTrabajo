const ContenedorPokemon = document.querySelector('.Contenedor-Pokemon');
const listaPokemons = [];
const input = document.getElementById('buscador');


async function fetchPokemons() {
  for (let i = 1; i <= 151; i++) {
    await fetchPokemon(i);
  }
}

async function fetchPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    listaPokemons.push(pokemon);
    CrearPokemon(pokemon);
}

fetchPokemons();

const tiposEspañol = {
  normal: "normal",
  fighting: "lucha",
  flying: "volador",
  poison: "veneno",
  ground: "tierra",
  rock: "roca",
  bug: "bicho",
  ghost: "fantasma",
  steel: "acero",
  fire: "fuego",
  water: "agua",
  grass: "planta",
  electric: "eléctrico",
  psychic: "psíquico",
  ice: "hielo",
  dragon: "dragón",
  dark: "siniestro",
  fairy: "hada",
}

function CrearPokemon(pokemon) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("tarjeta");

  const imagen = document.createElement("img");
  imagen.classList.add("imagen1")
  imagen.src = pokemon.sprites.front_default;

  const numeros = document.createElement("p");
  numeros.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const nombre = document.createElement("a");
  nombre.classList.add("nombre");
  nombre.textContent = pokemon.name;
  nombre.href = `PokedexIndividual.html?id=${pokemon.id}`;

  const tipo = document.createElement("div");
  const tipo2 = document.createElement("div");
  tipo.classList.add("tipo");
  tipo2.classList.add("tipo2");
  tipo.textContent = tiposEspañol[pokemon.types[0].type.name];
  tipo2.textContent = tiposEspañol[pokemon.types[1] ? pokemon.types[1].type.name : ''];
  tipo.style.backgroundColor = getTypeColor(pokemon.types[0].type.name);
  tipo2.style.backgroundColor = getTypeColor(pokemon.types[1] ? pokemon.types[1].type.name : '');

  if (!pokemon.types[1]) {
    tipo2.style.border = 'none';
  }

  contenedor.appendChild(imagen);
  contenedor.appendChild(numeros);
  contenedor.appendChild(nombre);
  contenedor.appendChild(tipo);
  contenedor.appendChild(tipo2);

  ContenedorPokemon.appendChild(contenedor);

  imagen.addEventListener("mouseover",function(){
    imagen.src = pokemon.sprites.front_shiny
  })

  imagen.addEventListener("mouseout",function(){
    imagen.src = pokemon.sprites.front_default;
  })
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
  }
}

function borrarPokemons() {
  const contenedor = document.querySelector('.Contenedor-Pokemon');
  while (contenedor.firstChild) {
    contenedor.firstChild.remove();
  }
}

input.addEventListener('input', function() {
  const busqueda = input.value.toLowerCase();

  borrarPokemons();

  const pokemonsFiltrados = listaPokemons.filter(pokemon => pokemon.name.includes(busqueda));

  pokemonsFiltrados.forEach(pokemon => {
    CrearPokemon(pokemon);
  });
});

const modoClaro = document.getElementById('modoClaro');
const modoOscuro = document.getElementById('modoOscuro');
let modoActual = localStorage.getItem('modo');
    
function establecerModoClaro() {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  localStorage.setItem('modo', 'light');
}
    
function establecerModoOscuro() {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
  localStorage.setItem('modo', 'dark');
}
    
if (modoActual === 'dark')
  establecerModoOscuro();
    
modoClaro.addEventListener('click', establecerModoClaro);
modoOscuro.addEventListener('click', establecerModoOscuro);

ContenedorPokemon.addEventListener("click", function(){
  document.location.href = 'PokedexIndividual.html';
});