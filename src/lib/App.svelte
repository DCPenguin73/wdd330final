<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Search from "./Search.svelte";
  import Player from "./Player.svelte";
  export let loginA;
  
  import { getCodeChallenge, getAccessToken } from "../scripts/login.mjs";
  import AuthenticateButton from "./AuthenticateButton.svelte";
  import PlayerEt from "./PlayerET.svelte";

  let src = "./images/Spotify_Logo_RGB_White.png";

  if(localStorage.getItem("access_token") == null){
    console.log("inside if");
    loginA = 0;
  }else{
    loginA = localStorage.getItem("login");
    console.log("inside else");
  }
  
</script>


<nav>
  <Header />
</nav>
<main>
  <!-- <img {src} alt="The Spotify logo" /> -->
  <h1>Spotify Web Player</h1>
  <h2>Powered but not endorsed by Spotify</h2>

  <section id="content">
    
    {#if loginA == 0}
      <!-- Nothing should be in this part> -->
    {:else}
    <!-- Everything should be in here unless it should show up when not logged in -->
    <section>
      <a href="#"><button>Create New Radio</button></a>
      <a href="#"><button>Manage Radios</button></a>
      <a href="#"><button>Search</button></a>
      <button on:click={getAccessToken}>Login Test</button>
    </section>
    <Search />
    <PlayerEt />
    <AuthenticateButton />
    {/if}
  </section>

  
  
  
</main>
<footer>
  <Footer/>
</footer>

<style>
  nav {
    max-width: fit-content;
  }
  img {
    max-width: 150px;
    padding: 15px;
    float: right;
  }
</style>
