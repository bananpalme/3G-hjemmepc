<script>
    import {scale} from 'svelte/transition'

    export let number
    export let show = true
</script>

{#if show}
    <main in:scale out:scale>
        {number}
    </main>
{/if}

<style>

    main{
        position:absolute;
        right:1rem;
        bottom:1rem;
        width:2rem;
        height:2rem;
        background:black;
        color:white;
        display:grid;
        place-items:center;
        border-radius:50%;
    }
</style>