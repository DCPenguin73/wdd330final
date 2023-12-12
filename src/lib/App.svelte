<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Search from "./Search.svelte";
  import PlayerET from "./PlayerET.svelte";
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
    <div>
      <Search />
    </div>
    <div>
      <PlayerEt />
    </div>
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
