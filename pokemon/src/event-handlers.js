export const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target); // FromData contructor to get the data from the event
  const formObject = Object.fromEntries(formData); // Creates a new object that contains both the key and value pairs.
  console.log(formObject);

  const response = await getPokemonData(formObject.pokemon); //returns the formObject.pokemon (pokemon comes from the HTML)

  const ul = document.querySelector("#pokemon-list");
  ul.innerHTML = "";
  if (!response[0]) {
    const p = document.createElement("p");
    p.textContent = "Pokemon not found";
    ul.append(p);
  } else {
    const pokemon = response[0];

    const li = document.createElement("li");
    li.id = pokemon.id;
    console.log(pokemon.id, "pokemon.id");
    const img = document.createElement("img");
    const p = document.createElement("h2");
    img.src = pokemon.sprites.front_default;
    p.textContent = pokemon.name;
    li.append(img, p);
    ul.append(li);
    const liElement = event.target.closest("LI");
    if (liElement) {
      const pokemonId = liElement.id; // Get the id from the LI element
      // console.log("LI id", pokemonId);
      window.location.href = `pokemon.html?id=${pokemonId}`;
    }
  }

  event.target.reset();
};

export const getPokemonData = async (pokemonName) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const fullUrl = `${url}${pokemonName}`;
  console.log(`Fetching: ${fullUrl}`); // Log the URL to debug it

  // Check if the response is OK and attempt to parse JSON only then

  try {
    const response = await fetch(fullUrl);
    if (!response.ok) throw new Error("Error parsing JSON");
    const jsonData = await response.json();
    return [jsonData, null];
  } catch (error) {
    console.warn(error.message);
    return [null, error];
  }
};
