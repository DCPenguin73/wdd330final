<script>
  import svelteLogo from "../assets/svelte.svg";
  import viteLogo from "../assets/vite.svg";
  import Header from "./Header.svelte";
  import Search from "./Search.svelte";
  import Playlists from "./Playlists.svelte";
  import AuthenticateButton from "./AuthenticateButton.svelte";
  import { userStore, loggedIn } from "../scripts/stores.mjs";

  let src = "./images/Spotify_Logo_RGB_White.png";
  let login = $userStore.isLoggedIn;
  loggedIn();
  console.log($userStore.isLoggedIn);
</script>

<nav>
  <Header />
</nav>
<main>
  <h1>Spotify Web Player</h1>
  <h2>Powered but not endorsed by Spotify</h2>

  <section>
    {#if !$userStore.isLoggedIn}
      <!-- <button on:click={getAccessToken}>Login Test</button> -->
      <AuthenticateButton />
    {:else if $userStore.isLoggedIn}
      <a href="#Player"><button>Web Player</button></a>
      <a href="#Playlists"><button>PlayLists</button></a>
      <a href="#Serch"><button>Search</button></a>
    {/if}
  </section>

  <!-- <button on:click={getAccessToken}>Login Test</button> -->
  <img {src} alt="The Spotify logo" />
  <Search />
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
