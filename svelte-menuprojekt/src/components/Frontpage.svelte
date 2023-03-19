<script>
    let surprice = false
    console.log(surprice)

</script>

<main>
    <div class="text">
        <h2>The Mars rovers</h2>
    </div>
    <div class="container">
        <img id="nasa" src="./assets/nasa-logo2.gif" alt="">
        
    </div>
    <div class="fotext">
        <h3>On this website, we took some pictures from a Nasa api that holds several Mars rover pictures. You can see the pictures, by going to "Find pictures" and then you can save them by clicking the rocket. Once the rocket has been clicked, the picture is saved in "Saved pictures". If you click on the pictures, they will extend to fullscreen, so you can get a better look at the pictures that previous Mars rovers have taken. </h3>

    </div>
</main>

<style>
	main{
        display:grid;
        grid-template-rows: 2fr 10fr;
        place-items: center;
        position: relative;
        background-color: rgb(15, 60, 140);
        height: 90vh;
        color: white;
    }
    .text{
        margin: 4rem;
        font-size: 2rem;
        font-weight: bold;
    }
    .fotext{
        width: 40vw;
        margin: 5rem;
        font-size: .9rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80%;
    }
    #nasa{
        position: absolute;
        height: 50%;
        object-position: contain;
        top: 20vh;
        left: 35.5vw;
        
    }
    

</style>