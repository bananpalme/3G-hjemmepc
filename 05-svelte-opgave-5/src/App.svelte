<script>
	import Recipe from './components/Recipe.svelte'
	
	let recipes = 
	['pasta bolognaise', 'potato pizza', 'macncheese', 'spaghgetti carbonara']
</script>

<main>
	{#each recipes as item, index}
		<Recipe title='{item}' index={index}/>
	{/each}
</main>

<style>
	main{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1rem;
	}
</style>