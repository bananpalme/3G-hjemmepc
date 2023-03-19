<script>
    import SavedLogo from "./SavedLogo.svelte";
    
    export let p
    export let savedPicture
    let active
    
	

    

</script>

<main>
    <div class="pics">
        <h2>{p.earth_date}</h2>
        <div on:click = { () => active = !active} class={active?'active':''}  >
            <img src={p.img_src} alt="">
        </div>          
            <SavedLogo bind:savedPicture={savedPicture} p={p}/>

    </div>
</main>

<style>
   main{
        display:grid;
        align-items: flex-start;
        width:200px;
        height: 200px;
        transition:2s ease-in-out;
    }
    .active{
        transition: 1s;
        background-color:rgb(235, 37, 58);
        padding: 1rem;
        place-items: center;
        position:absolute;
        left:0;
        top:0;
        width:100vw;
        height:80vh;
    }
    
    
    .pics{
        display:grid;
        place-items:center;
        border:1px solid whitesmoke;
        border-radius:10px;
        padding:.5rem;   
   
    }
    .pics h2{
        text-align:center;
        font-size:.5rem;
        color: black;
        z-index: 0;
    }
    .pics img{
        width: 90px;
        height:80px;
        object-fit:cover;
        border-radius:10%;
    }
    .active img{
        
        transition: 0.8s ease-in-out;
        width: 100%;
        height: 100%;
        object-fit:cover;
        border-radius:0%;
        place-items: center;
    }
    h2{
        opacity: 0;
    }
    
</style>