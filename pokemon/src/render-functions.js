export const fetchAndRenderPokemonList = async (pokemonListUL, pokemonList) => {
	try {
		pokemonListUL.innerHTML = "";

		for (const pokemon of pokemonList) {
			// can't use forEach with await inside of it because it won't wait for the asynchronous code to run. Need to use for of loop.
			const url = pokemon.url;
			const response = await fetch(url);
			if (!response.ok) throw new Error("Failed to load Pokemon");
			const jsonData = await response.json();

			const li = document.createElement("li");
			const img = document.createElement("img");
			const p = document.createElement("p");
			img.src = jsonData.sprites.front_default;
			p.textContent = jsonData.name;
			li.append(img, p);
			pokemonListUL.append(li);
		}
	} catch (error) {
		console.warn(error.message);
		return null;
	}
};

export const renderPokemon = (body, pokemon) => {
	const h2 = document.createElement("h2");
	const baseStats = document.createElement("p");
	const imageDiv = document.createElement("div");
	const img = document.createElement("img");
	const statsDiv = document.createElement("div");
	const p1 = document.createElement("p");
	const p2 = document.createElement("p");
	const p3 = document.createElement("p");
	const p4 = document.createElement("p");
	const p5 = document.createElement("p");
	const p6 = document.createElement("p");
	h2.textContent =
		pokemon.forms[0].name.slice(0, 1).toUpperCase() +
		pokemon.forms[0].name.slice(1);
	baseStats.textContent = `Base Stats:`;
	img.src = pokemon.sprites.front_default;
	p1.textContent = `HP: ${pokemon.stats[0].base_stat}`;
	p2.textContent = `Attack: ${pokemon.stats[1].base_stat}`;
	p3.textContent = `Defense: ${pokemon.stats[2].base_stat}`;
	p4.textContent = `Special Attack: ${pokemon.stats[3].base_stat}`;
	p5.textContent = `Special Defense: ${pokemon.stats[4].base_stat}`;
	p6.textContent = `Speed: ${pokemon.stats[5].base_stat}`;

	imageDiv.append(img);
	statsDiv.append(p1, p2, p3, p4, p5, p6);
	body.append(h2, baseStats, imageDiv, statsDiv);
};
