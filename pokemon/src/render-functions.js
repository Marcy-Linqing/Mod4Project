import { getPokemonDataList } from "./random";

export const fetchAndRenderPokemonList = async (
  url,
  pokemonListUL,
  randomList
) => {
  pokemonListUL.innerHTML = "";
  const response = await getPokemonDataList(url, randomList);

  response.forEach((pokemon) => {
    const li = document.createElement("li");
    // add id to the li
    li.id = pokemon.id;
    const img = document.createElement("img");

    const p = document.createElement("p");
    img.src = pokemon.sprites.front_default;
    p.textContent = pokemon.name;
    li.append(img, p);
    pokemonListUL.append(li);
  });
};

export const renderPokemon = (pokemon) => {
  const pokemonDiv = document.querySelector("#pokemon-details");
  const h2 = document.createElement("h2");
  h2.id = "pokemonName";
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
  console.log(pokemon.name);
  h2.textContent =
    pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1);
  // h2.textContent =
  //   pokemon.forms[0].name.slice(0, 1).toUpperCase() +
  //   pokemon.forms[0].name.slice(1);
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
  console.log(pokemonDiv);
  pokemonDiv.append(h2, baseStats, imageDiv, statsDiv);
};
