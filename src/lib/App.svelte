<script>
  import svelteLogo from "../assets/svelte.svg";
  import viteLogo from "../assets/vite.svg";
  import Counter from "./Counter.svelte";
  import Header from "./Header.svelte";
</script>

<nav>
  <Header />
</nav>
<main>
  <section>
    <a href="#"><button>Create New Radio</button></a>
    <a href="#"><button>Manage Radios</button></a>
    <a href="#"><button>Search</button></a>
  </section>
</main>

<style>
  nav {
    max-width: fit-content;
  }
</style>
