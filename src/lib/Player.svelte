<script>
    import { onMount } from 'svelte';
  
    const track = {
      name: "",
      album: {
        images: [
          { url: "" }
        ]
      },
      artists: [
        { name: "" }
      ]
    };
  
    let isPaused = false;
    let isActive = false;
    let player;
    let currentTrack = track;
  
    onMount(() => {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
  
      document.body.appendChild(script);
  
      window.onSpotifyWebPlaybackSDKReady = () => {
        player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: cb => { cb(props.token); },
          volume: 0.5
        });
  
        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
        });
  
        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });
  
        player.addListener('player_state_changed', (state) => {
          if (!state) {
            return;
          }
  
          currentTrack = state.track_window.current_track;
          isPaused = state.paused;
  
          player.getCurrentState().then(state => {
            (!state) ? isActive = false : isActive = true;
          });
        });
  
        player.connect();
      };
    });
  
    $: {
      if (!isActive) {
        console.log("Player is not active");
      }
    }
  </script>
  
  {#if !isActive}
    <div class="container">
      <div class="main-wrapper">
        <b> Instance not active. Transfer your playback using your Spotify app </b>
      </div>
    </div>
  {:else}
    <div class="container">
      <div class="main-wrapper">
        <img src={currentTrack.album.images[0].url} class="now-playing__cover" alt="" />
  
        <div class="now-playing__side">
          <div class="now-playing__name">{currentTrack.name}</div>
          <div class="now-playing__artist">{currentTrack.artists[0].name}</div>
  
          <button class="btn-spotify" on:click={() => player.previousTrack()}>
            &lt;&lt;
          </button>
  
          <button class="btn-spotify" on:click={() => player.togglePlay()}>
            {isPaused ? "PLAY" : "PAUSE"}
          </button>
  
          <button class="btn-spotify" on:click={() => player.nextTrack()}>
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  {/if}
  