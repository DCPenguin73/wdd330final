<script>
// @ts-nocheck

    export let results = "";
    function playTrack() {
        
    }
</script>

<div class="results">
    <ul>
        {#each results as track, i}
        <li on:click{playTrack}>
            <div class="name" id="{track.id}">
                <!-- There is no error here -->
                {track.name} 
            </div>
            <div>
                {track.artists[0].name}
            </div>
            <div>
                <!-- There is no error here -->
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="{track.album.images[2].url}">
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