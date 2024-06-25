export default async function app(appDiv) {
	const testRoute = async (url) => {
		const response = await fetch(url);
		const data = await response.json();
		console.log("data:", data);
		return data;
	};

	const pokemonName = 1;
	const numberOfPokemon = 20;
	const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokemon}`;
	const url2 = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

	testRoute(url1);
	testRoute(url2);
	// const showResult = document.createElement("p");
	// const textContentResult = await testRoute(url1);
	// showResult.textContent = textContentResult.results[0].name;
	appDiv.appendChild(showResult);
}
