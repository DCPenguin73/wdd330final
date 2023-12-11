<script>
  import svelteLogo from "../assets/svelte.svg";
  import viteLogo from "../assets/vite.svg";
  import Header from "./Header.svelte";
  import Search from "./Search.svelte";
  import Playlists from "./Playlists.svelte";
  import Player from "./Player.svelte";
  import AuthenticateButton from "./AuthenticateButton.svelte";
  import { userStore } from "../scripts/stores.mjs";
  // import {login} from "./AuthenticateButton.svelte";
  export let loginA;
  // import { loggedIn } from "./stores.mjs";

  let src = "./images/Spotify_Logo_RGB_White.png";

  // Object.defineProperty(window, "login", {set:loggedIn()}
  
    if(localStorage.getItem("access_token") == null){
      console.log("inside if");
      loginA = 0;
      // console.log(login);
    }else{
      loginA = localStorage.getItem("login");
      console.log("inside else");
    }
  //   }else if (login == 0){
  //     console.log("inside else if");
  //     login = v;
  //     userStore.subscribe((value) =>{login = value;});
  //     console.log(login);
  //   }else
  //   console.log(localStorage.getItem("access_token"));
  // }} );
  // if (login == 0){
  //   // document.getElementById("content").innerHTML
  // }else
  // {
  //   // document.getElementById("content").innerHTML
  // }
  function loggedIn(){
  //   if(localStorage.getItem("access_token") == null){
  //     console.log("inside if");
  //     userStore.set(0);
  //     userStore.subscribe((value) =>{login = value;});
  //     console.log(login);
  //   }else{
  //     console.log("inside else");
  //     userStore.set(1);
  //     userStore.subscribe((value) =>{login = value;});
  //     console.log(login);
  //   }
  //   console.log(localStorage.getItem("access_token"));
  }
</script>

<nav>
  <Header />
</nav>
<main>
  <h1>Spotify Web Player</h1>
  <h2>Powered but not endorsed by Spotify</h2>

  <section id="content">
    
    {#if loginA == 0}
      <!-- <button on:click={getAccessToken}>Login Test</button> -->
      <!-- <AuthenticateButton on:click={loggedIn}/> -->
    {:else}
      <a href="#Player"><button>Web Player</button></a>
      <a href="#Playlists"><button>PlayLists</button></a>
      <a href="#Serch"><button>Search</button></a>
      <Player />
      <Search />
    {/if}
  </section>

  <!-- <button on:click={getAccessToken}>Login Test</button> -->
  <img {src} alt="The Spotify logo" />
  
</main>

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
