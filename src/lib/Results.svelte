<script>
    export let results = "";

</script>


<div class="results">
    <ul>
        {#each results as track, i}
        <li>
            {track.name}
            <img src="{track.album.images[2].url}">
        </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        text-align: center;
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
    }
    li {
        list-style-type: none;
        /* display: inline-block; */
    }
</style>