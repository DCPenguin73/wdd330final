<script>
    export let results = "";

</script>


<div class="results">
    <ul>
        {#each results as track, i}
        <li>
            <div class="name">
                {track.name}
            </div>
            <div>
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
        max-width: 100px;
    }
</style>