<!--
	Example by GHOST and Fractal
	GHOST: https://github.com/ghostdevv
	Fractal: https://github.com/FractalHQ
-->
<script>
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "./Menu.svelte";

  let open;
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

<Hamburger bind:open --color="white" />
<Menu bind:open />

<style>
</style>
