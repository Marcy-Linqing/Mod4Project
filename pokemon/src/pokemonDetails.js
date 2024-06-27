import { renderPokemon } from "./render-functions";
async function fetchPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  return response.json();
}

function getPokemonIdFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
}

async function init() {
  const pokemonId = getPokemonIdFromURL();
  if (pokemonId) {
    const pokemon = await fetchPokemon(pokemonId);
    renderPokemon(pokemon);
  }
}

init();
