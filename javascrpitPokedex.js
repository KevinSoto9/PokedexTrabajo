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
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
  
    const card = document.createElement("div");
    card.classList.add("pokemon-block");
  
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
  
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    ContenedorPokemon.appendChild(card);
  
}

function Quitatodo(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

fetchPokemons(1);