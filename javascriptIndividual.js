const ContenedorPokemonIndividual = document.querySelector('.Contenedor-PokemonIndividual');
const listaPokemons = [];
const input = document.getElementById('buscador');



async function fetchPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    listaPokemons.push(pokemon);
    CrearPokemon(pokemon);
}

fetchPokemon(2);

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
  contenedor.classList.add("tarjeta2");

  const stats = document.createElement("div");
  stats.classList.add("stats");

  const info = document.createElement("div")
  info.classList.add("info")

  const imagen = document.createElement("img");
  imagen.classList.add("imagen2");
  imagen.src = pokemon.sprites.front_default;

  const numeros = document.createElement("p");
  numeros.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const nombre = document.createElement("p");
  nombre.classList.add("nombre");
  nombre.textContent = pokemon.name;

  const tipos = document.createElement("div");
  tipos.classList.add("tipos")
  const tipo = document.createElement("div");
  const tipo2 = document.createElement("div");
  tipo.classList.add("tipoi");
  tipo2.classList.add("tipoi2");
  tipo.textContent = tiposEspañol[pokemon.types[0].type.name];
  tipo2.textContent = tiposEspañol[pokemon.types[1] ? pokemon.types[1].type.name : ''];
  tipo.style.backgroundColor = getTypeColor(pokemon.types[0].type.name);
  tipo2.style.backgroundColor = getTypeColor(pokemon.types[1] ? pokemon.types[1].type.name : '');
  tipos.appendChild(tipo);
  tipos.appendChild(tipo2);

  // Estadísticas del Pokémon
  const estadisticas = document.createElement("div");
  estadisticas.classList.add("estadisticas");

  const presentacion = document.createElement("div");
  presentacion.classList.add("presentacion");

  // Altura

  const altura = document.createElement("div");
  const alturalabel = document.createElement("span");
  const alturanumero = document.createElement("p");
  alturalabel.textContent = `Altura: `;
  altura.classList.add("altura");
  alturanumero.textContent = pokemon.height + " m";
  altura.appendChild(alturalabel);
  altura.appendChild(alturanumero);
  estadisticas.appendChild(altura)

  // Peso

  const peso = document.createElement("div");
  const pesolabel = document.createElement("span");
  const pesonumero = document.createElement("p");
  pesolabel.textContent = `Peso`;
  peso.classList.add("peso");
  pesonumero.textContent = pokemon.weight + " Kg";
  peso.appendChild(pesolabel);
  peso.appendChild(pesonumero);
  estadisticas.appendChild(peso);

  // HP
  const hp = document.createElement("div");
  const hpLabel = document.createElement("span");
  const hpnumero = document.createElement("p")
  const hpBarra = document.createElement("div");
  hpLabel.textContent = `HP: `;
  hp.classList.add("hp")
  hpnumero.textContent = pokemon.stats[0].base_stat;
  hpBarra.classList.add("barra");
  hpBarra.style.width = `${pokemon.stats[0].base_stat}%`;
  hp.appendChild(hpLabel);
  hp.appendChild(hpnumero)
  hp.appendChild(hpBarra);
  estadisticas.appendChild(hp);

  // Ataque
  const ataque = document.createElement("div");
  const ataqueLabel = document.createElement("span");
  const ataquenumero = document.createElement("p")
  const ataqueBarra = document.createElement("div");
  ataqueLabel.textContent = `Ataque: `;
  ataque.classList.add("ataque")
  ataquenumero.textContent = pokemon.stats[1].base_stat;
  ataqueBarra.classList.add("barra");
  ataqueBarra.style.width = `${pokemon.stats[1].base_stat}%`;
  ataque.appendChild(ataqueLabel);
  ataque.appendChild(ataquenumero)
  ataque.appendChild(ataqueBarra);
  estadisticas.appendChild(ataque);

  // Defensa
  const defensa = document.createElement("div");
  const defensaLabel = document.createElement("span");
  const defensanumero = document.createElement("p");
  const defensaBarra = document.createElement("div");
  defensaLabel.textContent = `Defensa: `;
  defensa.classList.add("defensa")
  defensanumero.textContent = pokemon.stats[2].base_stat
  defensaBarra.classList.add("barra");
  defensaBarra.style.width = `${pokemon.stats[2].base_stat}%`;
  defensa.appendChild(defensaLabel);
  defensa.appendChild(defensanumero)
  defensa.appendChild(defensaBarra);
  estadisticas.appendChild(defensa);

  // Ataque especial
  const ataqueEspecial = document.createElement("div");
  const ataqueEspecialLabel = document.createElement("span");
  const ataqueEspecialNumero = document.createElement("p");
  const ataqueEspecialBarra = document.createElement("div");
  ataqueEspecialLabel.textContent = `Ataque Especial: `;
  ataqueEspecial.classList.add("ataqueEspecial");
  ataqueEspecialNumero.textContent = pokemon.stats[3].base_stat;
  ataqueEspecialBarra.classList.add("barra");
  ataqueEspecialBarra.style.width = `${pokemon.stats[3].base_stat}%`;
  ataqueEspecial.appendChild(ataqueEspecialLabel);
  ataqueEspecial.appendChild(ataqueEspecialNumero);
  ataqueEspecial.appendChild(ataqueEspecialBarra);
  estadisticas.appendChild(ataqueEspecial);

  // Defensa especial
  const defensaEspecial = document.createElement("div");
  const defensaEspecialLabel = document.createElement("span");
  const defensaEspecialNumero = document.createElement("p");
  const defensaEspecialBarra = document.createElement("div");
  defensaEspecialLabel.textContent = `Defensa Especial: `;
  defensaEspecial.classList.add("defensaEspecial")
  defensaEspecialNumero.textContent = pokemon.stats[4].base_stat;
  defensaEspecialBarra.classList.add("barra");
  defensaEspecialBarra.style.width = `${pokemon.stats[4].base_stat}%`;
  defensaEspecial.appendChild(defensaEspecialLabel);
  defensaEspecial.appendChild(defensaEspecialNumero)
  defensaEspecial.appendChild(defensaEspecialBarra);
  estadisticas.appendChild(defensaEspecial);

  // Velocidad
  const velocidad = document.createElement("div");
  const velocidadLabel = document.createElement("span");
  const velocidadNumero = document.createElement("p");
  const velocidadBarra = document.createElement("div");
  velocidadLabel.textContent = `Velocidad: `;
  velocidad.classList.add("velocidad");
  velocidadNumero.textContent = pokemon.stats[5].base_stat;
  velocidadBarra.classList.add("barra");
  velocidadBarra.style.width = `${pokemon.stats[5].base_stat}%`;
  velocidad.appendChild(velocidadLabel);
  velocidad.appendChild(velocidadNumero);
  velocidad.appendChild(velocidadBarra);
  estadisticas.appendChild(velocidad);

  // Resto
  presentacion.appendChild(numeros);
  presentacion.appendChild(nombre);
  info.appendChild(presentacion);
  info.appendChild(imagen);
  info.appendChild(tipos);
  stats.appendChild(estadisticas); 
  contenedor.appendChild(info);
  contenedor.appendChild(stats);

  ContenedorPokemonIndividual.appendChild(contenedor);

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

