<script>
    let active = false
    export let savedPicture = []
    export let p

    

    console.log(p)

    let checkIfIAmSaved = savedPicture.find( somePhoto => somePhoto.id == p.id )
    if(checkIfIAmSaved) active = true

    const addPic = () =>{
        savedPicture = [...savedPicture, p]
        active = true
        console.log(savedPicture)
    }
    const remPic = () => {
        let filter = savedPicture.filter ( isMe => isMe != p)
        active = false
        savedPicture = filter
        console.log(savedPicture)
    }
</script>

<main>
    
    <div class="logo">
        
        {#if active}
        
        <img on:click={remPic} src ="./assets/saved.svg"alt="prut">
        {:else}
        
        <img on:click={addPic} src ="./assets/normal.svg"alt="lort">
        
        {/if}
    </div>
</main>

<style>
    main{
        display: grid;
        height:  fit-content;
        width: fit-content;
        justify-content: center;
    }
    .logo{
        
        
        width: 20px;
        display: grid;
        margin-top: .1rem;
        border: 1px solid rgb(235, 37, 58);
        border-radius: 30%;
        background-color: whitesmoke;
    }
    
</style>