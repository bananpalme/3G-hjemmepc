<script>
	import { fly } from 'svelte/transition'
	let name = '89';
	let names = ['2 Nonagintillion', '4', '67']
	const removeItem = (i) => {
		names.splice(i, 1)
		names = names
	}
	let magic = false
</script>

<main>
	<h1>{name} times listened to Rat ultra sonic deterrent!</h1>
	<input type="text" bind:value={name}>
	<button on:click={()=> {names = [...names, name];name=''}}>add</button>
	<p>Watch the <a href="https://www.youtube.com/watch?v=ZMpX3vtDICY">Rat ultra sonic deterrent</a> video to get rid of your rats. They're coarse and get everywhere.</p>
	<button on:click={()=>magic=!magic}>show me other peoples numbers</button>
	{#if magic}
		<div class="people">
			{#each names as n, index}
				<div transition:fly="{{ y: 200, duration: 1000, delay:index*100 }}"class='person' on:click={ ()=>removeItem(index)}>{n} ({index})</div>
			{/each}
		</div>
	{/if}
</main>

<style>
	.people{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}
	.person{
		display: grid;
		place-items: center;
		background-color: teal;
		color: white;
		border-radius: 1rem;
		font-size: 2rem;
		height: 10rem;
		box-shadow: 10px 10px 20px 4px palegreen;
	}
	main {
		
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
</style>