const ContenedorPokemon = document.querySelector('.Contenedor-Pokemon')

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        CrearPokemon(data);
      });
  }

  function fetchPokemons() {
    for (let i = 0; i < 152; i++) {
      fetchPokemon(i);
    }
  }

function CrearPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("tarjeta");
  
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");
  
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
  
    spriteContainer.appendChild(sprite);
  
    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
  
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    const type = document.createElement("div");
    type.classList.add("type");
    type.textContent = pokemon.types.toString();
  
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(type);

    ContenedorPokemon.appendChild(card);
  
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

fetchPokemons(1);