import { fetchAndRenderPokemonList, renderPokemon } from "./render-functions";
import { handleSubmit } from "./event-handlers";
import { getRandomPokemon } from "./random";
export default async function app(appDiv) {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const pokemonListUL = document.querySelector("#pokemon-list");
  let randomList = JSON.parse(localStorage.getItem('randomList')) || getRandomPokemon(20);
  // Add event listener to the button
  document.querySelector("#random-pokemon").addEventListener("click", () => {
    randomList = getRandomPokemon(20)
    localStorage.setItem('randomList', JSON.stringify(randomList));
    fetchAndRenderPokemonList(url, pokemonListUL, randomList);
  });
  
  pokemonListUL.addEventListener("click", (event) => {
    const liElement = event.target.closest("LI");
    if (liElement) {
      const pokemonId = liElement.id; // Get the id from the LI element
      // console.log("LI id", pokemonId);
      window.location.href = `pokemon.html?id=${pokemonId}`;
    }
  });

  document.querySelector("form").addEventListener("submit", handleSubmit);

  localStorage.setItem('randomList', JSON.stringify(randomList));
  document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderPokemonList(url, pokemonListUL, randomList);
  });
}
