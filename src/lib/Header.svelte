<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./Menu.svelte";

  let open;
  let src = "./images/Spotify_Logo_RGB_White.png";
</script>

<svelte:head>
  <!-- Import base css -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
  />

  <!-- Import spin css (spin is default type) -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"
  />
</svelte:head>
<div id="head">
  <Hamburger bind:open --color="white" />
  <Menu bind:open />
</div>

<style>
  #head{
    display: flex;
  }
</style>
