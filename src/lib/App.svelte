<script>
  import svelteLogo from "../assets/svelte.svg";
  import viteLogo from "../assets/vite.svg";
  import Counter from "./Counter.svelte";
  import Header from "./Header.svelte";
  let src = './images/Spotify_Logo_RGB_White.png'
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
  </section>
  <img {src} alt="The Spotify logo" />
</main>

<style>
  nav {
    max-width: fit-content;
   
  }
  img{
    max-width:150px;
    padding:15px;
    float:right;
  }
</style>
