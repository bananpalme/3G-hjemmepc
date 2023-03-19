<script>
    export let savedPicture 
    console.log(savedPicture)
    import Picture from "./Picture.svelte";
    import SavedLogo from "./SavedLogo.svelte";
</script>

<main>
    
    {#if savedPicture.length > 0}
        {#each savedPicture as p}    
            
            <Picture {p} bind:savedPicture={savedPicture}/>
            
        {/each}
    {:else}
        <h2 id="ingen">Ingen gemte billeder...</h2>
    {/if}

</main>

<style>
    main{
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        justify-content: center;
        align-items: center;
        grid-gap:.5rem;
        width:100vw;
        height: 90vh;
        padding: .2rem;
        position: relative;
        background-color: rgb(15, 60, 140);
    }
    main h2{
        position: absolute;
        left: 43vw;
        width: 20vw;
        top: 5vh;
        color: white;
    }
</style>