<script>
// @ts-nocheck

    export let results = "";
    /// PLAY A TRACK FROM CLICKING THE IMAGE FROM A SEARCH RESULT!!!!!
    async function playTrack(uri) {
        let token = getAccessToken();
        let url = "https://api.spotify.com/v1/me/player/play";
        let data = { uris: [uri], };
        let response = await fetch(url, {
            method: "PUT",
            headers: { 
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log(uri);
    }
    function getAccessToken() {
        return localStorage.getItem("access_token");
    }
</script>

<div class="results">
    <ul>
        {#each results as track, i}
        <li>
            <div class="name">
                <!-- There is no error here -->
                {track.name} 
            </div>
            <div>
                {track.artists[0].name}
            </div>
            <div>
                <!-- There is no error here -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <img on:click={playTrack(track.uri)} src="{track.album.images[2].url}">
            </div>
        </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        text-align: center;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 20px;
        margin: 0;
    }
    li {
        list-style-type: none;
        padding: 0;
        margin: 5px;
    }
    .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
    }
</style>