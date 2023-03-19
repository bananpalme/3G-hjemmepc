<script>
    export let q
    let pictures = []
    export let savedPicture
    import Picture from "./Picture.svelte"
    let errorMessage = ''

    
   
    $: console.log(q + ' is the query')
    $:  if(q.length > 1){
            pictures = []
            fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${q}/photos?sol=1000&api_key=FAarAA0KQticC7xRiAyxRdqPDyVygbxaRNTfdZvu` )
           .then(res => {
               if(res.ok){
                   return res.json()
                   errorMessage = ''
                }else{
                    errorMessage = 'Kunne ikke hente data fra NASA'
                    errorMessage += res.status == 429 ? ' - Prøv igen senere' : ''
                    console.log(res)
                    }
            })
           .then(json => {
               console.log(json)
               if(json.photos) pictures = json.photos 
           })
       }
</script>
   
<main class='page'>
        <div class="searchbar">
            <select bind:value={q}>
                 <option  value="Spirit">spirit</option>
                 <option value="Curiosity">curiosity</option>
            </select>
        </div>
        <div class="results">
            {#if errorMessage != ''}
                 <h2>{errorMessage}</h2>
            {/if}


            {#if pictures.length > 0}
                 {#each pictures as p}                    
                    <Picture {p} bind:savedPicture={savedPicture}/>
                {/each}
            {:else}
                <div class="load">

                    <h2>Loader...</h2>
                    <img src="./assets/giphy.gif" alt="">

                </div>

            {/if}
                 <!-- else content here -->
       </div>
</main>
   
<style>
       main{
           display:grid;
           grid-template-rows: 10vh auto;
           align-items: flex-start;
        }
       .searchbar{
           display:grid;
           background-color:rgb(15, 60, 140);
           width:100vw;
           height:10vh;
           place-items:center;
        }
       .results{
           display:grid;
           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
           justify-content: center;
           align-items: center;
           grid-gap:.5rem;
           width:100vw;
           padding: .2rem;
           position:relative;
        }
        .load{
            justify-content: center;
            display: grid;
            align-self: center;
            position: absolute;
            top: 13vh;
            left: 40vw;
            width: 40vh;
            height: 40vh;
  
        }
        .load h2{
        margin-bottom: 2rem;
        color: white;
       }
</style>