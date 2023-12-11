<!-- This is an example player attempted to be built: By Everett Tsosie -->
<script>
  //   import { WebPlayback } from "svelte-spotify-web-playback";
  import { get } from "svelte/store";
  let client_id = import.meta.env.VITE_CLIENT_ID;
  let devices = "";

  async function getPlaybackState() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/currently-playing";
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response;
    console.log(data);
  }
  async function startResume() {
    getPlaybackState();
    let token = getAccessToken();
    console.log(token);
    let url = "https://api.spotify.com/v1/me/player/play";
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    isPlaying = true;
  }
  async function pause() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/pause";
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    isPlaying = false;
  }
  async function skipToNext() {
    let token = getAccessToken();
    console.log(token);
    let url = "https://api.spotify.com/v1/me/player/next";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    isPlaying = true;
  }
  async function skipToPrevious() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/previous";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    isPlaying = true;
  }
  function getAccessToken() {
    return localStorage.getItem("access_token");
  }
  import CurrentTrack from "./CurrentTrack.svelte";

  var SPOTIFY_ACCESS_TOKEN = "";
  var isPlaying = false;
  let track = "";

  async function getCurrentlyPlayingTrack() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/currently-playing";
    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    track = data;
    console.log(track);
  }
  async function startResume() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/play";
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    isPlaying = true;
    await getCurrentlyPlayingTrack();
  }
  async function pause() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/pause";
    let response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    isPlaying = false;
    await getCurrentlyPlayingTrack();
  }
  async function skipToNext() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/next";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    isPlaying = true;
    await getCurrentlyPlayingTrack();
  }
  async function skipToPrevious() {
    let token = getAccessToken();
    let url = "https://api.spotify.com/v1/me/player/previous";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    isPlaying = true;
    await getCurrentlyPlayingTrack();
  }
  function getAccessToken() {
    return localStorage.getItem("access_token");
  }
</script>

<div class="player">

  <div>
    {#if track}
      <CurrentTrack bind:currentTrack={track} />
    {:else}
      No Current Track
    {/if}
  </div>
  <button on:click={getCurrentlyPlayingTrack}>getCurrentlyPlayingTrack</button>
  <div class="buttons">
    <button on:click={skipToPrevious}>&lt&lt</button>
    {#if !isPlaying}
      <button on:click={startResume}>Play</button>
    {:else if isPlaying}
      <button on:click={pause}>Pause</button>
    {:else}
      <p>Something is broken :&lt</p>
    {/if}
    <button on:click={skipToNext}>&gt&gt</button>
  </div>
</div>

<!-- <div>
  <WebPlayback {client_id} name="Spotify Web Player" volume="0.5" />
</div> -->

<style>

  .player {
    display: inline-grid;
    grid-template-columns: 100%;
    grid-template-rows: 80% 20%;
    min-width: 300px;
    max-width: 100%;
    min-height: 130px;
    max-height: 20%;
    border-style: solid;
    border-width: 1px;
    border-radius: 20px;
    border-color: white;
    margin: 15px;
  }
  .buttons {
    margin: 20px;
    /* grid-row-start: 2;
        grid-row-end: 2; */
  }
</style>
