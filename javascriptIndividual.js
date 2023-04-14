const ContenedorPokemonIndividual = document.querySelector('.Contenedor-PokemonIndividual');
const URL = 'PokedexIndividual.html';
const input = document.getElementById('buscador');

async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  CrearPokemon(pokemon);
}

async function fetchEspecie(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const pokemon = await response.json();
  CrearEspecie(pokemon);
}

async function fetchImagen(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  CrearImagen(pokemon);
}

async function startDetails() {
  const response = window.location.search;
  const pokemon = new URLSearchParams(response);
  const a = pokemon.get('id');
  await fetchPokemon(a);
  await fetchEspecie(a);
}

const tiposEspanol = {
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

const itemsEspanol = {
  'fire-stone': "piedra fuego",
  'water-stone': "piedra agua",
  'moon-stone': "piedra lunar",
  'thunder-stone': "piedra trueno",
  'leaf-stone': "piedra hoja"
}

async function CrearEspecie(pokemonsolo){
  const url = document.createElement("p")
  url.textContent = pokemonsolo.evolution_chain.url
  
  const response2 = await fetch(url.textContent);
  const pokemon2 = await response2.json();
  CrearEvolucion(pokemon2);
}

function CrearImagen(pokemonsolo){
  const ContenedorImagen = document.querySelector('.contenedorImagen');
  const imagen1 = document.createElement("img");
  imagen1.classList.add(`imagen3`);
  imagen1.src = pokemonsolo.sprites.other['official-artwork'].front_default

  imagen1.addEventListener("mouseover",function(){
    imagen1.src = pokemonsolo.sprites.other['official-artwork'].front_shiny
  })

  imagen1.addEventListener("mouseout",function(){
    imagen1.src = pokemonsolo.sprites.other['official-artwork'].front_default
  })

  ContenedorImagen.appendChild(imagen1);
  ContenedorPokemonIndividual.appendChild(ContenedorImagen);
}

async function CrearEvolucion(pokemonsolo){
  const contenedorEvo = document.createElement("div");
  const evoinfo = document.createElement("div");
  const nombres = document.createElement("div");
  nombres.classList.add("nombres")
  evoinfo.classList.add("evoinfo")
  contenedorEvo.classList.add("evo")
  const evo1 = document.createElement("p");
  const evo2 = document.createElement("p");
  const evo25 = document.createElement("p")
  const evo3 = document.createElement("p");
  const nombrePokemon = document.createElement("p");
  const objetoLabel = document.createElement("p");
  const objeto = document.createElement("p")
  const objetoPosible = document.createComment("p");
  const nivel = document.createElement("p");
  const nivel2 = document.createElement("p")
  objetoLabel.textContent = 'Evolucion:  '
  nombrePokemon.textContent = pokemonsolo.chain.species.name;
  evo1.textContent = pokemonsolo.chain.evolves_to[0] ? pokemonsolo.chain.evolves_to[0].species.name : null ;
  evo2.textContent = pokemonsolo.chain.evolves_to[1] ? pokemonsolo.chain.evolves_to[1].species.name : null ;
  evo25.textContent = pokemonsolo.chain.evolves_to[2] ? pokemonsolo.chain.evolves_to[2].species.name : null ;
  evo3.textContent = pokemonsolo.chain.evolves_to[0].evolves_to[0] ? pokemonsolo.chain.evolves_to[0].evolves_to[0].species.name : null ;
  objeto.textContent = 'Objeto ' + itemsEspanol[pokemonsolo.chain.evolves_to[0].evolution_details[0].item ?  pokemonsolo.chain.evolves_to[0].evolution_details[0].item.name : null]
  objetoPosible.textContent = 'Objeto' + itemsEspanol[pokemonsolo.chain.evolves_to[0].evolves_to ? pokemonsolo.chain.evolves_to[0].evolves_to[0] ? pokemonsolo.chain.evolves_to[0].evolves_to[0].evolution_details.item : null :null];
  nivel.textContent = pokemonsolo.chain.evolves_to ?  'Nivel ' + pokemonsolo.chain.evolves_to[0].evolution_details[0].min_level  : null;
  nivel2.textContent = pokemonsolo.chain.evolves_to[0].evolves_to[0] ?  'Nivel ' + pokemonsolo.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level : null;

  evoinfo.appendChild(objetoLabel)
  evoinfo.appendChild(objeto)
  evoinfo.appendChild(objetoPosible)
  evoinfo.appendChild(nivel)
  evoinfo.appendChild(nivel2)
  nombres.appendChild(nombrePokemon)
  nombres.appendChild(evo25)
  nombres.appendChild(evo1)
  nombres.appendChild(evo2)
  nombres.appendChild(evo3)




  fetchImagen(nombrePokemon.textContent)
  fetchImagen(evo1.textContent)
  fetchImagen(evo2.textContent)
  fetchImagen(evo25.textContent)
  fetchImagen(evo3.textContent)


 ContenedorPokemonIndividual.appendChild(evoinfo)
 ContenedorPokemonIndividual.appendChild(nombres)

if(nombrePokemon.textContent === 'eevee'){
  evo1.textContent = 'jolteon';
  evo2.textContent = 'flareon';
  evo25.textContent = 'vaporeon';

}

if(nombrePokemon.textContent === 'pichu'){
  nombrePokemon.textContent =  '';
}

if(nombrePokemon.textContent === 'cleffa'){
  nombrePokemon.textContent = '';
}

if(nombrePokemon.textContent === 'zubat'){
  evo3.textContent = '';
}

if(nombrePokemon.textContent === 'meowth'){
  evo2.textContent = '';
}

if(nombrePokemon.textContent === 'slowpoke'){
  evo2.textContent = '';
}

if(nombrePokemon.textContent === 'magnemite'){
  evo3.textContent = '';
}

if(nombrePokemon.textContent === 'rhyhorn'){
  evo3.textContent = '';
}
if(nombrePokemon.textContent === 'horsea'){
  evo3.textContent = '';
}

if(nombrePokemon.textContent === 'tangela'){
  evo1.textContent = '';
}

if(nombrePokemon.textContent === 'happiny'){
  nombrePokemon.textContent = '';
  evo3.textContent = '';
}



if(nombrePokemon.textContent === 'farfetchd'){
  evo1.textContent = '';
}

if(nombrePokemon.textContent === 'lickitung'){
  evo1.textContent = '';
}

if(nombrePokemon.textContent === "igglybuff"){
  nombrePokemon.textContent = '';
}

if(nombrePokemon.textContent === "onix"){
  evo1.textContent = '';
}

if(nombrePokemon.textContent === "munchlax"){
  nombrePokemon.textContent = '';
}

if(nombrePokemon.textContent === "smoochum"){
  nombrePokemon.textContent = '';
}

if(nombrePokemon.textContent === 'mime-jr'){
  nombrePokemon.textContent = '';
  evo3.textContent = '';
}

if(nombrePokemon.textContent === 'elekid'){
  nombrePokemon.textContent = '';
  evo3.textContent = '';
}

if(nombrePokemon.textContent === 'scyther'){
  evo1.textContent = '';
  evo2.textContent = '';
}

if(nombrePokemon.textContent === 'porygon'){
  evo1.textContent = '';
  evo3.textContent = '';
}

if(nombrePokemon.textContent === 'magby'){
  nombrePokemon.textContent = '';
  evo3.textContent = '';
}

if(nombrePokemon.textContent === 'tyrogue'){
  nombrePokemon.textContent = ``;
  evo2.textContent = '';
  evo25.textContent = 'hitmonlee';
  evo1.textContent = 'hitmonchan';
}




 if(evo25.textContent === null){
  evo25.textContent = '';
 }

 if(evo2.textContent === null){
  evo2.textContent = '';
 }

 if(evo3.textContent === null){
  evo3.textContent = '';
 }

 if(objeto.textContent === 'Objeto undefined'){
  objeto.textContent = '';
 }

 if(nivel.textContent === 'Nivel null'){
  nivel.textContent = '';
 }

 if(nivel2.textContent === 'Nivel null'){
  nivel2.textContent = '';
 }

 const ayuda = document.createElement("p")
 ayuda.textContent = pokemonsolo.chain.id
 
 const urlayuda = await fetch(`https://pokeapi.co/api/v2/pokemon/${ayuda}`);
 const pokemon3 = await urlayuda.json();
 CrearImagen(pokemon3)

}


function CrearPokemon(pokemonsolo) {
  const contenedor = document.createElement("div");
  contenedor.classList.add("tarjeta2");

  const stats = document.createElement("div");
  stats.classList.add("stats");

  const info = document.createElement("div")
  info.classList.add("info")

  const imagen = document.createElement("img");
  imagen.classList.add("imagen2");
  imagen.src = pokemonsolo.sprites.other['official-artwork'].front_default

  const numeros = document.createElement("p");
  numeros.classList.add("numero");
  numeros.textContent = `#${pokemonsolo.id.toString().padStart(3, 0)}`;

  const nombre = document.createElement("p");
  nombre.classList.add("nombre");
  nombre.textContent = pokemonsolo.name;

  const tipos = document.createElement("div");
  tipos.classList.add("tipos")
  const tipo = document.createElement("div");
  const tipo2 = document.createElement("div");
  tipo.classList.add("tipoi");
  tipo2.classList.add("tipoi2");
  tipo.textContent = tiposEspanol[pokemonsolo.types[0].type.name];
  tipo2.textContent = tiposEspanol[pokemonsolo.types[1] ? pokemonsolo.types[1].type.name : ''];
  tipo.style.backgroundColor = getTypeColor(pokemonsolo.types[0].type.name);
  tipo2.style.backgroundColor = getTypeColor(pokemonsolo.types[1] ? pokemonsolo.types[1].type.name : '');
  tipos.appendChild(tipo);
  tipos.appendChild(tipo2);

  if (!pokemonsolo.types[1]) {
    tipo2.style.border = 'none';
  }

  const estadisticas = document.createElement("div");
  estadisticas.classList.add("estadisticas");

  const presentacion = document.createElement("div");
  presentacion.classList.add("presentacion");

  const altura = document.createElement("div");
  const alturalabel = document.createElement("span");
  const alturanumero = document.createElement("p");
  alturalabel.textContent = `Altura: `;
  altura.classList.add("altura");
  alturanumero.textContent = pokemonsolo.height / 10 + " m";
  altura.appendChild(alturalabel);
  altura.appendChild(alturanumero);
  estadisticas.appendChild(altura)

  const peso = document.createElement("div");
  const pesolabel = document.createElement("span");
  const pesonumero = document.createElement("p");
  pesolabel.textContent = `Peso:`;
  peso.classList.add("peso");
  pesonumero.textContent = pokemonsolo.weight / 10 + " Kg";
  peso.appendChild(pesolabel);
  peso.appendChild(pesonumero);
  estadisticas.appendChild(peso);

  const hp = document.createElement("div");
  const hpLabel = document.createElement("span");
  const hpnumero = document.createElement("p")
  const hpBarra = document.createElement("progress");
  hpLabel.textContent = `HP: `;
  hp.classList.add("hp")
  hpnumero.textContent = pokemonsolo.stats[0].base_stat + " / 255";
  hpBarra.max = '255';
  hpBarra.classList.add("barra");
  hpBarra.value = `${pokemonsolo.stats[0].base_stat}`;
  hp.appendChild(hpLabel);
  hp.appendChild(hpnumero)
  hp.appendChild(hpBarra);
  estadisticas.appendChild(hp);

  const ataque = document.createElement("div");
  const ataqueLabel = document.createElement("span");
  const ataquenumero = document.createElement("p")
  const ataqueBarra = document.createElement("progress");
  ataqueLabel.textContent = `Ataque: `;
  ataque.classList.add("ataque")
  ataquenumero.textContent = pokemonsolo.stats[1].base_stat + " / 255";
  ataqueBarra.max = '255';
  ataqueBarra.classList.add("barra");
  ataqueBarra.value = `${pokemonsolo.stats[1].base_stat}`;
  ataque.appendChild(ataqueLabel);
  ataque.appendChild(ataquenumero)
  ataque.appendChild(ataqueBarra);
  estadisticas.appendChild(ataque);

  const defensa = document.createElement("div");
  const defensaLabel = document.createElement("span");
  const defensanumero = document.createElement("p");
  const defensaBarra = document.createElement("progress");
  defensaLabel.textContent = `Defensa: `;
  defensa.classList.add("defensa")
  defensanumero.textContent = pokemonsolo.stats[2].base_stat + " / 255";
  defensaBarra.classList.add("barra");
  defensaBarra.max = '255';
  defensaBarra.value = `${pokemonsolo.stats[2].base_stat}`;
  defensa.appendChild(defensaLabel);
  defensa.appendChild(defensanumero)
  defensa.appendChild(defensaBarra);
  estadisticas.appendChild(defensa);

  const ataqueEspecial = document.createElement("div");
  const ataqueEspecialLabel = document.createElement("span");
  const ataqueEspecialNumero = document.createElement("p");
  const ataqueEspecialBarra = document.createElement("progress");
  ataqueEspecialLabel.textContent = `Ataque Especial: `;
  ataqueEspecial.classList.add("ataqueEspecial");
  ataqueEspecialNumero.textContent = pokemonsolo.stats[3].base_stat + " / 255";
  ataqueEspecialBarra.classList.add("barra");
  ataqueEspecialBarra.max = '255';
  ataqueEspecialBarra.value = `${pokemonsolo.stats[3].base_stat}`;
  ataqueEspecial.appendChild(ataqueEspecialLabel);
  ataqueEspecial.appendChild(ataqueEspecialNumero);
  ataqueEspecial.appendChild(ataqueEspecialBarra);
  estadisticas.appendChild(ataqueEspecial);

  const defensaEspecial = document.createElement("div");
  const defensaEspecialLabel = document.createElement("span");
  const defensaEspecialNumero = document.createElement("p");
  const defensaEspecialBarra = document.createElement("progress");
  defensaEspecialLabel.textContent = `Defensa Especial: `;
  defensaEspecial.classList.add("defensaEspecial")
  defensaEspecialNumero.textContent = pokemonsolo.stats[4].base_stat + " / 255";
  defensaEspecialBarra.max = '255';
  defensaEspecialBarra.classList.add("barra");
  defensaEspecialBarra.value = `${pokemonsolo.stats[4].base_stat}`;
  defensaEspecial.appendChild(defensaEspecialLabel);
  defensaEspecial.appendChild(defensaEspecialNumero)
  defensaEspecial.appendChild(defensaEspecialBarra);
  estadisticas.appendChild(defensaEspecial);

  const velocidad = document.createElement("div");
  const velocidadLabel = document.createElement("span");
  const velocidadNumero = document.createElement("p");
  const velocidadBarra = document.createElement("progress");
  velocidadLabel.textContent = `Velocidad: `;
  velocidad.classList.add("velocidad");
  velocidadNumero.textContent = pokemonsolo.stats[5].base_stat + " / 255";
  velocidadBarra.max = '255';
  velocidadBarra.classList.add("barra");
  velocidadBarra.value = `${pokemonsolo.stats[5].base_stat}`;
  velocidad.appendChild(velocidadLabel);
  velocidad.appendChild(velocidadNumero);
  velocidad.appendChild(velocidadBarra);
  estadisticas.appendChild(velocidad);

  presentacion.appendChild(numeros);
  presentacion.appendChild(nombre);
  info.appendChild(presentacion);
  info.appendChild(imagen);
  info.appendChild(tipos);
  stats.appendChild(estadisticas); 
  contenedor.appendChild(info);
  contenedor.appendChild(stats);

  ContenedorPokemonIndividual.appendChild(contenedor);


   if (!pokemonsolo.types[1]) {
    tipo2.style.border = 'none';
  }

  imagen.addEventListener("mouseover",function(){
    imagen.src = pokemonsolo.sprites.other['official-artwork'].front_shiny
  })

  imagen.addEventListener("mouseout",function(){
    imagen.src = pokemonsolo.sprites.other['official-artwork'].front_default
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