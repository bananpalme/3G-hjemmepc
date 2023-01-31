<script>
	import {scale} from 'svelte/transition'
	import {fly} from 'svelte/transition'

	let cocktail
	const getCocktail = () => {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
			.then(res => res.json()) //først får vi et response objekt som laves til json
			.then(json => { //så når vi får json tilbage ud af response objektet
				cocktail = json.drinks[0] //gemmer vi objektet i en variabel
				console.log(cocktail) //i konsollen kan du se al info i objektet 
			})
	}

	let savedCocktail = []

	const saveCocktail = () => {
		savedCocktail = [...savedCocktail, cocktail] //spread operator
	}
</script>

<main>
	{#if cocktail}
		<div in:fly out:fly class="cocktail">
			<div class="description">
				<h2>{cocktail.strDrink}</h2>
				<p>{cocktail.strInstructions}</p>
			</div>
			<img src="{cocktail.strDrinkThumb}" alt="">
		</div>
	{/if}

	<div class="buttons">
		<button on:click={getCocktail}>Get cocktail</button>
		<button on:click={saveCocktail}>Save cocktail</button>
	</div>


	
	{#each savedCocktail as p, index}
	
		<div in:scale out:scale class="savedCocktail">
			<img src="{p.strDrinkThumb}" alt="">
			<div class="counter">
				{index + 1} 
			</div>
		</div>
	{/each} 
		
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.buttons{
		position: fixed;
		top: 27rem;
		right: 8rem;
		width: 100%;
	}
	.counter{
		color: steelblue;
	}
	.cocktail{
		display:grid;
		grid-template-columns: 2fr 1fr;
		width:50vw;
		margin: 3rem;
		box-shadow: 1rem 1rem 1rem 1rem black; 
				/* x akse, y akse, blur, spredning, farve */
	}
	.savedCocktail{
		display:inline-grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		width:8vw;
		margin: 3rem;

	}
	.cocktail img{
		width:100%;
		height:100%;
		object-fit: cover; /* fyld rammen med billedet så godt som muligt */
	} 
	.savedCocktail img{
		width:100%;
		height:100%;
		object-fit: cover; /* fyld rammen med billedet så godt som muligt */
	} 
	.cocktail .description{
		padding:1rem;
	}
</style>