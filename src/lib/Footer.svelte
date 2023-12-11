<script>
    let spot = "./images/Spotify_Logo_RGB_White.png";
    let sve = "./images/svelteLogo.png";
    let vite = "./images/viteLogo.png";
</script>

<section>
    <img src={spot} alt="The Spotify logo" />
    <img src={sve} alt="The Svelte logo" />
    <img id="viteLogo" src={vite} alt="The Vite logo" />    
</section>

<style>
    img {
      max-width: 100px;
      padding: 15px;
    }
    #viteLogo{
        max-width: 50px;
    }
  </style>