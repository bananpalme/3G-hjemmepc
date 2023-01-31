<script>
    import Page from './Page.svelte'

    export let title = 'this is the default value'
    export let index 
    export let show = true

    const prut = () =>{
        show = !show
    }
</script>

<main>
    <h1>{title}</h1>
    <Page number={index} show={show}/>
    <button on:click={prut}>
        {#if show}
            hide
        {:else}
            show
        {/if}
    </button>
</main>

<style>
    main{
        min-width:20rem;
        height:20rem;
        padding:1rem;
        border:1px solid lightblue;
        border-radius: 1rem;
        position: relative;
    }
   
</style>