<!-- This is an example player attempted to be built: By Everett Tsosie -->
<script>
    var isPlaying = false;
    var SPOTIFY_ACCESS_TOKEN = "";
    function getPlaybackState(){
        let url = "";
    }
    async function startResume() {
        let token = getAccessToken();
        let url = "https://api.spotify.com/v1/me/player/play";
        let response = await fetch(url, {
            method: "PUT",
            headers: { 
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json",
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
                "Authorization" : `Bearer ${token}`,
            },
        });
        isPlaying = false;
    }
    async function skipToNext() {
        let token = getAccessToken();
        let url = "https://api.spotify.com/v1/me/player/next";
        let response = await fetch(url, {
            method: "POST",
            headers: { 
                "Authorization" : `Bearer ${token}`,
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
                "Authorization" : `Bearer ${token}`,
            },
        });
        isPlaying = true;
    }
    function getAccessToken() {
        return localStorage.getItem("access_token");
    }
</script>

<div class="player">
    <div>
        <!-- Display current song info -->
    </div>
    <div class="buttons">
        <button on:click={skipToPrevious}>&lt&lt</button>
        {#if !isPlaying}
        <button class="playpause" on:click={startResume}>Play</button>
        {:else if isPlaying}
        <button class="playpause" on:click={pause}>Pause</button>
        {:else}
        <p>Something is broken :&lt</p>
        {/if}
        <button on:click={skipToNext}>&gt&gt</button>
    </div>
</div>
    
    

<style>
    .player {
        display: inline-grid;
        grid-template-columns: 100%;
        grid-template-rows: 80% 20%;
        min-width: 60%;
        max-width: 100%;
        min-height: 130px;
        max-height: 20%;
        margin: 15px;
    }
    .buttons {
        /* grid-row-start: 2;
        grid-row-end: 2; */
    }
    .playpause {
        width: 80px;        
    }
</style>