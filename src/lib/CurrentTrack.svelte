<script>
    export let currentTrack = "";
</script>

<div>
    <img src={currentTrack.item.album.images[1].url} alt="hello">
</div>
<div>
    <p class="name">Track: {currentTrack.item.name}</p>
    <p class="name">Artist: {currentTrack.item.album.name}</p>
</div>

<style>
    img {
        margin: 20px 20px 0px 20px;
    }
</style>