<script>
  import svelteLogo from "../assets/svelte.svg";
  import viteLogo from "../assets/vite.svg";
  import Header from "./Header.svelte";
  import Search from "./Search.svelte";
  import Playlists from "./Playlists.svelte";
  import { getCodeChallenge, getAccessToken } from "../scripts/login.mjs";
  import {userStore} from './stores.mjs';

  // getAccessToken();
  // let code_verifier;
  // async function init() {
  //   code_verifier = await getCodeChallenge();
  // }
  // init();
  // const client_id = import.meta.env.VITE_CLIENT_ID;
  // const redirect_uri = "http://localhost/5173/auth/callback";

  // const scope = "user-read-private user-read-email";
  // const authUrl = new URL(`https://accounts.spotify.com/authorize`);

  // // generated in the previous step
  // window.localStorage.setItem("code_verifier", code_verifier);

  // const params = {
  //   response_type: "code",
  //   client_id: client_id,
  //   scope,
  //   code_challenge_method: "S256",
  //   code_challenge: code_verifier,
  //   redirect_uri: redirect_uri,
  // };

  // console.log(`In app.svelte ${params.code_challenge}`);
  // authUrl.search = new URLSearchParams(params).toString();
  // window.location.href = authUrl.toString();

  // const urlParams = new URLSearchParams(window.location.search);
  // let code = urlParams.get("code");

  // const getToken = async (code) => {
  //   // stored in the previous step
  //   let codeVerifier = localStorage.getItem("code_verifier");

  //   const payload = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: new URLSearchParams({
  //       client_id: client_id,
  //       grant_type: "authorization_code",
  //       code: code,
  //       redirect_uri: redirect_uri,
  //       code_verifier: codeVerifier,
  //     }),
  //   };

  //   const url = "https://accounts.spotify.com/api/token";
  //   const body = await fetch(url, payload);
  //   const response = await body.json();
  // };
  // const rawData = await fetch("https://accounts.spotify.com/api/token", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded6",
  //   },
  //   body: JSON.stringify({
  //     grant_type: "client_credentials",
  //     client_id: import.meta.env.VITE_CLIENT_ID,
  //     client_secret: import.meta.env.VITE_CLIENT_SECRET,
  //   }),
  // });

  //   const rawData = await fetch("https://accounts.spotify.com/api/token", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  // },
  //     },
  //     body: JSON.stringify({
  //       grant_type: "client_credentials",
  //       client_id: import.meta.env.VITE_CLIENT_ID,
  //       client_secret: import.meta.env.VITE_CLIENT_SECRET,
  //     }),
  //   });
  // console.log(rawData);
  let src = "./images/Spotify_Logo_RGB_White.png";
  let login = "";
</script>

<nav>
  <Header />
</nav>
<main>
  <h1>Spotify Web Player</h1>
  <h2>Powered but not endorsed by Spotify</h2>
  
    <section>
      {#if !$userStore.isLoggedIn}
      <button on:click={getAccessToken}>Login Test</button>
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
