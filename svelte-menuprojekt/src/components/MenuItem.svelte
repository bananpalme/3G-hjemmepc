<script>
    export let title
    export let activePage

</script>

<main 
    class={ activePage == title ? 'active' : '' }
    on:click={ () => activePage = title }
    >
    {title}
</main>

<style>
    main{
        cursor:pointer;
        transition:.1s ease-in-out all;
        padding-bottom:.4rem;
        border-bottom-width:0;
        color:white;
        border-bottom:4px solid gray;
    }
    .active{
        animation: jumpIn .6s ease-in-out forwards;
    }
    @keyframes jumpIn{
        0%{
            transform:scale(1);
            border-bottom:1px solid rgb(235, 37, 58);
        }
        50%{
            transform:scale(1.2);
            border-bottom:0px solid rgb(235, 37, 58);
        }
        100%{
            transform:scale(1);
            border-bottom:4px solid rgb(235, 37, 58);
        }
    }
</style>