<script>
  import svelteLogo from "../assets/svelte.svg";
  import viteLogo from "../assets/vite.svg";
  import Counter from "./Counter.svelte";
  import Header from "./Header.svelte";
  import Search from "./Search.svelte";

  async function login() {
    const rawData = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded6",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      }),
    });

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
    console.log(rawData);
  }
  let src = "./images/Spotify_Logo_RGB_White.png";
</script>

<nav>
  <Header />
</nav>
<main>
  <h1>Spotify Web Player</h1>
  <h2>Powered but not endorsed by Spotify</h2>
  <section>
    <a href="#"><button>Create New Radio</button></a>
    <a href="#"><button>Manage Radios</button></a>
    <a href="#"><button>Search</button></a>
    <button on:click={login}>Login Test</button>
  </section>
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
