export const handleSubmit = (event) => {
	event.preventDefault();

	const formData = new FormData(event.target); // FromData contructor to get the data from the event
	const formObject = Object.fromEntries(formData); // Creates a new object that contains both the key and value pairs.

	getPokemonData(formObject.pokemon); //returns the formObject.pokemon (pokemon comes from the HTML)
	event.target.reset();
};
