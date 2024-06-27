import { getPokemonList, getPokemon } from "./fetch-functions";
import { fetchAndRenderPokemonList, renderPokemon } from "./render-functions";
import { handleSubmit } from "./event-handlers";

export default async function app(appDiv) {
	// const testRoute = async (url) => {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	console.log("data:", data);
	// 	return data;
	// };

	// const pokemonName = 1;
	// const numberOfPokemon = 20;
	// const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokemon}`;
	// const url2 = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

	const pokemonList = await getPokemonList();
	const pokemonListUL = document.querySelector("#pokemon-list");
	fetchAndRenderPokemonList(pokemonListUL, pokemonList);

	const pokemon = await getPokemon(1025);
	console.log(pokemon);
	const body = document.querySelector("body");
	renderPokemon(body, pokemon);

	// console.log(pokemonList);

	// const pokemonData = await getPokemon();
	// renderPokemon(pokemonData);

	document.querySelector("form").addEventListener("submit", handleSubmit);
	// testRoute(url1);
	// testRoute(url2);
	// const showResult = document.createElement("p");
	// const textContentResult = await testRoute(url1);
	// showResult.textContent = textContentResult.results[0].name;
	// appDiv.append(showResult);
}
