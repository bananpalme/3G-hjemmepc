<script>
	import MenuItem from './components/MenuItem.svelte'
	import Frontpage from './components/Frontpage.svelte'
	import Findpicture from './components/Findpicture.svelte'
	import SavedPictures from './components/SavedPictures.svelte'
	import SavedLogo from './components/SavedLogo.svelte';
	import Picture from './components/Picture.svelte'
	let menu = ['Frontpage', 'Find pictures', 'Saved pictures']
	let activePage = menu[0]
	let savedPicture = []
	//q er vores rover term til søgninger - men vi vil have den globalt, så den ikke er afhængig af subkomponenter som bliver reoaded
	let q = 'Spirit'	
</script>

<header>
	{#each menu as item}
		<MenuItem bind:activePage={activePage} title={item} />
	{/each}
</header>
<main>
	
	{#if activePage == menu[0]}
		<Frontpage/>
	{:else if  activePage == menu[1]}
		<Findpicture bind:q={q} bind:savedPicture = {savedPicture}/>
		
		
	{:else if  activePage == menu[2]}
		<SavedPictures bind:savedPicture = {savedPicture}/>
	{/if}
	
</main>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

	:global(*, body){
		box-sizing: border-box;
		margin:0;
		padding:0;
		font-family: 'Roboto';
	}
	:global(.page){
		display:grid;
		height:90vh;
	}
	:global(body){
		background-color: rgba(15, 61, 140, 0.85);
	}
	header{
		display:grid;
		height:10vh;
		grid-auto-flow:column;
		place-items:center;
		background:rgb(18, 20, 25);
	}
	main {
		display:grid;
		
		position:relative;
	}

	h1 {
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}
</style>