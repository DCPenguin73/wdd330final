<script>
  import { fly, scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import AuthenticateButton from "./AuthenticateButton.svelte";
  // import {loggedIn} from "./App.svelte";

  //   export let login;
  export let open;

  let loginB;
  if(localStorage.getItem("access_token") == null){
      console.log("inside if");
      loginB = 0;
      // console.log(login);
    }else{
      loginB = 1;
    }

    function logout(){
      loginB = 0
      localStorage.clear();
      location.reload();

    }
</script>

{#if open}
  <div class="menu">
    {#if loginB == 0}
      <AuthenticateButton />
    {:else }
      <button on:click={logout}>Logout</button>
    {/if}
    {#each [] as link, i}
      <p transition:fly={{ y: -15, delay: 50 * i }}>
        {link}
      </p>
    {/each}
  </div>

  <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
{/if}

<style>
  :global(html) {
    background: #1d1d2f;
  }

  .menu {
    margin-right: 0;
  }

  div {
    text-align: center;
    font-size: 1.5em;
    letter-spacing: 0.15em;
    padding: 1em;
    padding-top: 0;
    color: #eef;
  }
  p {
    cursor: pointer;
    width: max-content;
    margin: 1rem auto;
  }
  p:hover {
    text-decoration: underline;
  }
</style>
