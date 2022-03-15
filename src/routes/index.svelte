<script context="module">
    export async function load(){
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
		const response = await fetch(url);
		const data = await response.json();
		const loadedPokemon = data.results.map((data,index) => {
        return {
            id: index + 1,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`

        }
    });
	return {props: {pokemon: loadedPokemon}};
    }
</script>
<script>
	import PokemonCard from '../components/pokemonCard.svelte';
	export let pokemon;
	let searchTerm = '';
	let filteredPokemon = [];
	$:{
		if(searchTerm){
			filteredPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
		}else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit Pokemon</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase font-bold">Pokemon List</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} type="text" placeholder="Search Pokemon">
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
