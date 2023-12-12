<script>
    let spot = "./images/Spotify_Logo_RGB_White.png";
    let sve = "./images/svelteLogo.png";
    let vite = "./images/viteLogo.png";
</script>

<section id="footer">
    <img id="sveLogo" src={sve} alt="The Svelte logo" />
    
    <img id="viteLogo" src={vite} alt="The Vite logo" />    
    <img src={spot} alt="The Spotify logo" />
</section>

<style>
    #footer{
        padding: 15px;
        margin-top:25px;
    }
    img {
      max-width: 100px;
      padding: 15px;
    }
    #viteLogo{
        max-width: 50px;
        padding-top: -10px;
    }
    #sveLogo{
        /* padding-top: 20px; */
    }
  </style>