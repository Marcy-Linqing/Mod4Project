export const getPokemonList = async (num) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/?limit=13`;

		const response = await fetch(url);
		if (!response.ok) throw new Error("Failed to load Pokemon list");
		const jsonData = await response.json();
		return jsonData.results;
	} catch (error) {
		console.warn(error.message);
		return null;
	}
};

export const getPokemon = async (urlKey) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${urlKey}`;
		const response = await fetch(url);
		if (!response.ok) throw new Error("Failed to load a Pokemon");
		const jsonData = await response.json();
		return jsonData;
	} catch (error) {
		console.warn(error.message);
		return null;
	}
};
