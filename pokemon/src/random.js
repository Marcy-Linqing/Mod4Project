export const getRandomPokemon = (numberOfPokemon) => {
  const maxCount = 1025; // set the count to what the pokemone website count
  if (numberOfPokemon > maxCount) {
    return "The number is bigger than the maximum pokemons we had.";
  }
  // random a list with a size of numberOfPokemon from 1 to maxCount
  const pokemonList = Array.from(
    { length: numberOfPokemon },
    () => Math.floor(Math.random() * maxCount) + 1
  );
  //   console.log(pokemonList);
  return pokemonList;
};

export const getPokemonDataList = async (url, pokemonList) => {
  //   const pokemonData = [];
  //   pokemonList.forEach(async (pokemonId) => {
  //     try {
  //       const response = await fetch(`${url}${pokemonId}`);
  //       //   console.log('response = await', response)
  //       if (!response.ok) throw new Error("Failed to load a Pokemon");
  //       const data = await response.json();
  //       //   console.log('data', data.abilities)
  //       pokemonData.push(data);
  //     } catch (error) {
  //       console.warn(error.message);
  //       return null;
  //     }
  //   });

  const pokemonData = [];
  for (let pokemonId of pokemonList) {
    // console.log(pokemonId)
    try {
      const response = await fetch(`${url}${pokemonId}`);
      if (!response.ok) throw new Error("Failed to load a Pokemon");
      const data = await response.json();
      //   console.log('data', data.abilities)
      pokemonData.push(data);
    } catch (error) {
      console.warn(error.message);
      return null;
    }
  }
  return pokemonData;
};
